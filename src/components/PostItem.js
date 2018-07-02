import React, { Component } from 'react'
import styled, { css } from 'react-emotion';
import { Spring, animated, interpolate } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons'

import { Link } from 'react-router-dom';
import { Img, Heading } from '../components/common';

const PostHeading = styled('h1')`
  padding: 1rem;
  background-color: ${props => props.theme.colors.brand};
  color: white;
  max-height: 100%;
  margin: 0;
  @media screen and (max-width: 420px){
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;
const GridItem = styled('div')`
  background-color: ${props => props.background ? props.theme.colors.brand : null};
  Position: relative;
`;
export default class PostItem extends Component {
  state = {
    hover: false,
  }
    onHover = () => {
      this.setState({hover: !this.state.hover})
    }
  render() {
      const { post } = this.props;
      const { hover } = this.state;
      console.log(hover);
      
    return (
      <GridItem
        background={true}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}  
        key={`post-${post.id}`} 
        style={this.props.styles} 
      >
          <Link to={`/post/${post.slug}`}>
            {  post.coverImage &&
                <Spring
                  from={{
                    transform: 'scale(1)',
                  }}
                  to={{
                    transform: hover ? 'scale(1.12)' : 'scale(1)',
                  }}
                >
                  {(style) =>
                  <Img
                    // className={css`max-width: 300px;`}
                    className={css`${style}`}
                    alt={post.title}
                    src={`https://media.graphcms.com/resize=w:450,h:250,fit:crop/${post.coverImage.handle}`}
                  />
                }
              </Spring>
            }
        <Spring
          native
          impl={TimingAnimation}
          config={{ duration: 400, easing: Easing.elastic(2) }}
          from={{
            y: 0,
          }}
          to={{
            y: hover ? -6 : 0,
          }}
        >
            {({y}) =>
              <animated.div style={{transform: interpolate(y, (y) => `translateY(${y}px)`)}}>
                <PostHeading >
                {post.title}
                </PostHeading>
              </animated.div>
          }
        </Spring>
          </Link>
      </GridItem>
    )
  }
}
