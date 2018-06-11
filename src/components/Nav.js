import React from 'react';
import styled, { css }  from 'react-emotion';
import { NavLink } from 'react-router-dom';
import Bloki from 'bloki';

const Branding = styled(NavLink)`
  display: inline-block;
  margin: 0;
  color: ${props => props.theme.colors.brand};
  text-decoration: none;
  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: -1px;
    text-transform: uppercase;
  }
`;

const NavEl = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`;

const Menu = styled('ul')`
  display: inline-block;
`;

const MenuItem = styled('li')`
  display: inline-flex;
  margin-left: ${props => props.theme.paddingSm};
  color ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`;
const NavMdDown = css`
  display: inline-flex;
  align-items: flex-end;
  flex-direction: column;
`;
const Anchor = css`
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;
  display: block;
  transition: all 300ms ease;
  color: currentColor;
  border-bottom: 1px solid #dadada;
  padding: 0.5rem 0;
  transition: all 300ms ease; 
`;
const Active = css`
  color: #c22954;
  border-bottom: 1px solid #c22954;
`;
const Nav = () => (
  <Bloki row>
    {theme => (
    <Bloki col auto>
        <NavEl>
        <Branding to="/"><h1>Ren Rizzolo</h1></Branding>
          <Menu className={theme.up.includes('md') ? null : NavMdDown}>
          <Item label="Home" to="/" exact className={Anchor} activeClassName={Active} />
          <Item label="About" to="/about" className={Anchor} activeClassName={Active} />
        </Menu>
      </NavEl>
    </Bloki>
    )}
  </Bloki>
);

const Item = ({label, ...props}) => (
  <MenuItem>
      <NavLink  {...props}>
      {label}
    </NavLink>
  </MenuItem>
);


export default Nav;

