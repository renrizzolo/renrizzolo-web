import React from 'react';
import styled from 'react-emotion';
import { NavLink } from 'react-router-dom';

const Tag = styled('span')`
  font-size: 0.8rem;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  a {
    text-decoration: none;
  }
`;

export default (props) => {
  return (
    <Tag>
      <NavLink to={`/tag/${props.tag}`}>
        {props.tag}
      </NavLink>
    </Tag>
  )
}
