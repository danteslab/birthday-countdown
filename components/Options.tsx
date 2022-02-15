import { useRef, useState } from 'react'
import styled from 'styled-components'
import { CountdownContextValue } from '../contexts/countdown.context'
import { CountdownActionType } from '../reducers/countdown.reducer'
import { Popover } from './Popover'

export function Options({
  countdownState,
  dispatchCountdownAction,
  containerTarget,
}: CountdownContextValue | any) {
  const popupTarget = useRef()

  const [open, setOpen] = useState(false)

  return (
    <Wrapper>
      <img
        className="settingsIcon"
        src="https://icongr.am/feather/settings.svg?size=32&color=ffffff"
        ref={popupTarget}
        onClick={() => {
          setOpen(prev => !prev)
        }}
      />
      <Popover
        placement="left"
        container={containerTarget}
        target={popupTarget}
        containerStyle={{ zIndex: 99 }}
        show={open}
        onHide={() => {
          console.log('HIHIHIDEEE')
          setOpen(false)
        }}
      >
        <OptionsContainer>
          <b>Options:</b>
          <input
            type="date"
            value={countdownState.birthday.toISOString().substring(0, 10)}
            onChange={event => {
              dispatchCountdownAction({
                type: CountdownActionType.UPDATE_DATE,
                birthday: event.target.valueAsDate,
              })
            }}
          />
          <button
            onClick={() => {
              if (!document.fullscreenElement) {
                document.querySelector('body').requestFullscreen()
              } else {
                document.exitFullscreen()
              }
            }}
          >
            [FullScreen]
          </button>
        </OptionsContainer>
      </Popover>
    </Wrapper>
  )
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
    background: #7c7c7c91;
    &:hover {
      opacity: 1;
    }
  }
`

const OptionsContainer = styled.div`
  background: #a8a8a86e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 14px;
  top: 60px;
  padding: 10px;
  border-radius: 4px;
  border-radius: 4px;
  position: absolute;
`
