import React from 'react'
import Nav from './Nav';
import styled from 'react-emotion';
import Bloki from 'bloki';

const Header = styled('div')`
  padding-top: ${props => props.theme.paddingLg};
  width: 100%;
`;

export default () => (
  <Header>
    <Nav />
  </Header>
);
