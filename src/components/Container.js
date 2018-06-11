import React from 'react';
import styled, { css } from 'react-emotion';
import Bloki from 'bloki';

export default (props) => {
  return (
    <Bloki wrap={false} col auto {...props}>
      {props.children}
    </Bloki>
  )
};
