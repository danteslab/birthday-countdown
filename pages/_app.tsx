import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Layout } from '../components/Layout';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <React.Fragment>
          <Head>
            <title>Change Title</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </React.Fragment>
      </Layout>
    );
  }
}
