import React from 'react';
import styled from 'react-emotion';
const Panel = styled('div')`
    padding: ${props => props.theme.paddingLg};
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
`;
export default (props) => {
  return (
      <Panel>
          {props.children}
      </Panel>
  )
}
