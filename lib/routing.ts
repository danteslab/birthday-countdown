import { NextRouter } from 'next/router';
import Morph from 'morphmorph';
import url, { UrlWithParsedQuery } from 'url';
import { escapeHtml, forceLocalDateFromUTCDate, isValidDate } from './utils';
import logger from '../logger/pino.logger';

const URL_LIMIT = 4e3;

const mapper = new Morph({
  types: {
    bool: v => {
      if (v == null) return undefined;
      if (v === 'false') return false;
      return Boolean(v);
    },
    int: v => {
      const integer = parseInt(v);
      if (isNaN(integer)) return undefined;
      return integer;
    },
    intArray: v => {
      if (v == null) return undefined;
      return v
        .split(',')
        .filter(i => !isNaN(i))
        .map(i => parseInt(i));
    },
    date: v => {
      const date = new Date(v);
      if (!isValidDate(date)) {
        logger.info('The date value you specified is not valid', { value: v });
        return undefined;
      }

      return forceLocalDateFromUTCDate(date);
    },
    encodeDate: (v: Date) => {
      return v.toISOString().substring(0, 10);
    },
    parse: v => {
      try {
        const x = JSON.parse(v);
        return x;
      } catch (e) {
        return v;
      }
    },
    decode: v => {
      if (v == null) return undefined;
      try {
        return decodeURIComponent(v);
      } catch (e) {
        return v;
      }
    },
    encode: v => {
      if (v == null) return undefined;
      try {
        const encoded = encodeURIComponent(v);
        if (encoded.length > URL_LIMIT) {
          // soft prevent URL length limit errors https://github.com/carbon-app/carbon/issues/829
          return encodeURIComponent(v.slice(0, URL_LIMIT / 2));
        }
        return encoded;
      } catch (e) {
        return v;
      }
    },
  },
});

const readMappings = [{ field: 'b:birthday', type: 'date' }, { field: 'bg:backgroundUrl' }];

const writeMappings = [
  { field: 'birthday:b', type: 'encodeDate' },
  { field: 'backgroundUrl:bg' },
];

export function deserializeState(serializedState) {
  let stateString;
  if (typeof window !== 'undefined') {
    stateString = atob(serializedState);
  } else {
    stateString = Buffer.from(serializedState, 'base64').toString();
  }

  return JSON.parse(decodeURIComponent(stateString));
}

const getQueryStringObject = query => {
  if (query.state) {
    return deserializeState(query.state);
  }

  const state = mapper.map(readMappings, query);

  /** Delete all empty query params */
  Object.keys(state).forEach(key => {
    if (state[key] === '') state[key] = undefined;
  });

  return state;
};

function getQueryStringState(query) {
  const queryParams = getQueryStringObject(query);
  return Object.keys(queryParams).length ? queryParams : {};
}

export function getRouteState(router: NextRouter) {
  const { asPath = '' } = router;

  const { query, pathname } = fixAsPathEncoding(asPath);
  const queryState = getQueryStringState(query);
  const path = escapeHtml(
    pathname
      // remove trailing slash
      .replace(/\/$/, '')
      .split('/')
      .pop()
  );

  const parameter = path.length >= 19 && path.indexOf('.') < 0 ? path : null;

  return {
    parameter,
    queryState,
  };
}

function fixAsPathEncoding(asPath: string): UrlWithParsedQuery {
  try {
    return url.parse(asPath, true);
  } catch (e) {
    return url.parse(encodeURI(asPath), true);
  }
}

export function updateRouteState(router: NextRouter, state = {}) {
  const mappedState = mapper.map(writeMappings, state);

  router.replace(
    {
      pathname: router.pathname,
    },
    {
      pathname: router.pathname,
      query: mappedState,
    },
    { shallow: true, scroll: false }
  );
}
