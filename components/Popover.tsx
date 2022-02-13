import React from 'react';
import Overlay from 'react-overlays/Overlay';

export const Popover = props => {
  const { children } = props

  return (
    <Overlay
      show={props.show}
      offset={[0, 0]}
      onHide={props.onHide}
      placement={props.placement}
      container={props.container}
      target={props.target}
      rootClose={true}
    >
      {() => children}
    </Overlay>
  );
};
