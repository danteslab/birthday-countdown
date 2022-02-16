import { useRef, useState } from 'react';
import styled from 'styled-components';
import { CountdownContextValue } from '../contexts/countdown.context';
import { forceLocalDateFromUTCDate } from '../lib/utils';
import { CountdownActionType } from '../reducers/countdown.reducer';
import { Button } from './forms/Button';
import { Input } from './forms/Input';
import { Label } from './forms/Label';
import { Popover } from './Popover';

export function Options({
  countdownState,
  dispatchCountdownAction,
  containerTarget,
}: CountdownContextValue & Record<any, any>) {
  const popupTarget = useRef();
  const [open, setOpen] = useState(true);

  const [birthday, setBirthday] = useState(countdownState.birthday);
  const [backgroundUrl, setBackgroundUrl] = useState(countdownState.backgroundUrl);

  return (
    <Wrapper>
      <img
        className="settingsIcon"
        src="https://icongr.am/feather/settings.svg?size=32&color=ffffff"
        ref={popupTarget}
        onClick={() => {
          setOpen(prev => !prev);
        }}
      />
      <Popover
        placement="left"
        container={containerTarget}
        target={popupTarget}
        containerStyle={{ zIndex: 99 }}
        show={open}
        onHide={() => setOpen(false)}
      >
        <OptionsContainer>
          <b>OPTIONS</b>
          {/* <button
            onClick={() => {
              if (!document.fullscreenElement) {
                document.querySelector('body').requestFullscreen();
              } else {
                document.exitFullscreen();
              }
            }}
          >
            [FullScreen]
          </button> */}
          <Label>Your Birthday:</Label>
          <Input
            type="date"
            style={{ width: '100%' }}
            value={birthday.toISOString().substring(0, 10)}
            onChange={event => setBirthday(event.target.valueAsDate)}
          />

          <Label>Background Url:</Label>
          <Input
            type="text"
            style={{ width: '100%' }}
            value={backgroundUrl}
            onChange={e => setBackgroundUrl(e.target.value)}
          />
          <Button
            style={{
              marginTop: 10,
            }}
            onClick={() => {
              dispatchCountdownAction({
                type: CountdownActionType.INITIALIZE,
                state: {
                  backgroundUrl,
                  birthday: forceLocalDateFromUTCDate(birthday),
                },
              });
            }}
          >
            Apply
          </Button>
        </OptionsContainer>
      </Popover>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: white;
  position: absolute;
  margin: 0;
  top: 14px;
  right: 14px;

  .settingsIcon {
    padding: 4px;
    border-radius: 4px;
    opacity: 0.4;
    cursor: pointer;
    background: #40404091;
    &:hover {
      opacity: 1;
    }
  }
`;

const OptionsContainer = styled.div`
  background: #40404091;
  width: 240px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 14px;
  top: 60px;
  padding: 10px 17px;
  border-radius: 4px;
  border-radius: 4px;
  position: absolute;
`;
