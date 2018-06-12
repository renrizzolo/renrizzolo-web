import React, { Component } from 'react';
import styled, { css }  from 'react-emotion';
import { NavLink } from 'react-router-dom';
import Bloki from 'bloki';
import { Transition, animated } from 'react-spring'


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
  border-bottom: 1px solid;
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
  border-top: none;
  padding: 0.5rem 0;
  transition: all 300ms ease; 
`;
const Active = css`
  color: #c22954;
  border-top: 1px solid #e3778c;
`;
export default () => (

    <Bloki col auto>
      {theme => (
        <NavEl>
          <Branding to="/"><h1>Ren Rizzolo</h1></Branding>
          <Menu className={theme.up.includes('md') ? null : NavMdDown}>
            <Item label="Home" to="/" exact/>
            <Item label="About" to="/about"/>
          </Menu>
        </NavEl>
    )}
  </Bloki>
);

  const B = styles => (
    <animated.div
      style={{ backgroundColor: '#14D790' }}>
      B
  </animated.div>
  )
class Item extends Component {
  state = { toggled: true }
  toggle = e => this.setState(state => ({ toggled: !state.toggled }))

  A = styles => {
    console.log(styles);
    return (
      <animated.div style={{...styles}}>
      <MenuItem onClick={this.toggle}>
        <NavLink {...this.props}>
          {this.props.label}
        </NavLink>
      </MenuItem>
      </animated.div>
    )
  }
  B = styles => (
    <animated.div style={{ ...styles }}>
      <MenuItem onClick={this.toggle}>
        <NavLink {...this.props}>
          {this.props.label}
        </NavLink>
      </MenuItem>
    </animated.div>
  )

  render() {
    const { label, ...rest } = this.props;
    
    return (
      <MenuItem>
        <NavLink {...rest} className={Anchor} activeClassName={Active}>
          {label}
        </NavLink>
      </MenuItem>
    )
  }
}

