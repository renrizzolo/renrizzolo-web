import React, { Component } from 'react'
import styled from 'react-emotion';
import Bloki from 'bloki';
import PropTypes from 'prop-types';
import { Spring, config, } from 'react-spring';
import { OscillatorAnimation, TimingAnimation, Easing }  from 'react-spring/dist/addons';
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
    const { isResting } = this.state;
    return (
      <Bloki align="center" justify="center" style={{width: '100%'}}>
      
        <Spring
          config={{ tension: isResting ? 110 : 80, friction: isResting ? 8 : 5 }} // { tension: 180, friction: 12 },
          from={{ opacity: 0, scale: 0 }} 
          to={{
            opacity: 1, scale: isResting ? 2.5 : 4,
          }}
          onRest={this.handleRest}
        >
          {
           ({opacity, scale}) => 
            <LoadingEl width={width} animation={opacity}>
              <LoadingElInner width={width / 4} animation={scale} />
            </LoadingEl>
          }
        </Spring>
      </Bloki>
    );
  }
}

Loading.defaultProps = {
  width: 75,
};
