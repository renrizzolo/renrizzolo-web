import React, { Component } from 'react'
import styled from 'react-emotion';
import Bloki from 'bloki';
import PropTypes from 'prop-types';

import { Motion, spring } from 'react-motion';
import { DEFAULT_DEPRECATION_REASON } from 'graphql';
import { timeout } from 'async';

const LoadingEl = styled('div')`
    border: 1px solid;
    border-radius: 50%; 
    background: ${props => props.theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    opacity: ${props => props.animation};
`;

const LoadingElInner = styled('div')`
    border: 1px solid;
    border-radius: 50%; 
    border-color: ${props => props.theme.colors.primary};
    background-color: white;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    transform: scale(${props => props.animation});
`;
export default class Loading extends Component {
  state = {
    isResting: false,
  }
  handleRest = () => {
    this.setState({
      isResting: true,
    }, () => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.setState({
            isResting: false,
          })
        })
      }, 500);

    })
  }
  render() {
    const { width } = this.props;
    return (
      <Bloki align="center" justify="center" style={{width: '100%'}}>
        <Motion 
          defaultStyle={{ x: 0, s: 1 }} 
          style={{ 
            x: spring(1, { stiffness: 180, damping: 20 }),
            s: this.state.isResting ? 0 : spring(4, { stiffness: 130, damping: 12 },) 
          }} 
          onRest={this.handleRest}
        >
          {
           ({x, s}) => 
            <LoadingEl width={width} animation={x}>
              <LoadingElInner width={width / 4} animation={s} />
            </LoadingEl>
            
          }
        </Motion>
      </Bloki>
    );
  }
}

Loading.defaultProps = {
  width: 75,
};
