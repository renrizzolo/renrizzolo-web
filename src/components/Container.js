import React from 'react';
import styled from 'react-emotion';
import Bloki from 'bloki';

export default (props) => {
  return (
    <Bloki col mb>
      {props.children}
    </Bloki>
  )
};
