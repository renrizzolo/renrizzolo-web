import React from 'react'
import styled from 'react-emotion';
const Error = styled('div')`
    border: 2px solid ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.error};
    padding: ${props => props.theme.paddingSm};
`;
export default (props) => {
  return (
    <Error>
      {props.children}
    </Error>
  )
}
