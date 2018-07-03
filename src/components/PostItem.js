import React, { Component } from 'react'
import styled, { css } from 'react-emotion';
import { Spring, animated, interpolate } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons'

import { Link } from 'react-router-dom';
import { Img, Heading } from '../components/common';

const PostHeading = styled('h1')`
  margin-top: 1rem;
  /* color: white; */
  font-size: 1.45rem;
  transition: color 250ms;
  color: ${props => props.hover ? props.theme.colors.brand : 'inherit'};
  max-height: 100%;
  @media screen and (max-width: 420px){
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;
const Overlay = css`
  content:"";
  z-index: 1;
  mix-blend-mode: overlay;
  width :100%;
  position: absolute;
  background: linear-gradient(#ffffff00,#ffffff);
  height: 100%;
`;
const TitleOverlay = css`
  content:"";
  z-index: 0;
  width :100%;
  position: absolute;
  background: #ffb7c5;
  height: 100%;
`;
const Tag = css`
  font-size: 0.73rem;
  background-color: #eaeaea; 
  border-radius: 2.5px; 
  padding: 3px 6px;
  margin-left: 5px;
  border: 1px solid black;
`;
const GridItem = styled('div')`
  background-color: ${props => props.background ? props.theme.colors.brand : null};
  Position: relative;
  overflow: hidden;
`;
const MetaContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
          background
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}  
          key={`post-${post.id}`} 
      >
            {  post.coverImage &&
              <Spring
                  from={{
                    transform: 'scale(1)',
                  }}
                  to={{
                    transform: hover ? 'scale(1.12)' : 'scale(1)',
                  }}
                >
                  {({transform}) =>
                    <Link to={`/post/${post.slug}`} className={css`position:relative;display: block;overflow: hidden;`}>
                      <GridOverlay hover={hover} />
                      <Img
                        style={{ transform: transform}}
                        alt={post.title}
                        src={`https://media.graphcms.com/resize=w:450,h:250,fit:crop/${post.coverImage.handle}`}
                      />
                    </Link>
                  }
              </Spring>
            }
  
        <Spring
          native
          impl={TimingAnimation}
          config={{ duration: 200, easing: Easing.ease }}
          to={{
            y: hover ? 0 : 100,
            x: hover ? 150 : 0,
            skewX: hover ? 0 : 45,
            skewY: hover ? 0 : 0,

          }}
        >
          {({ x, y, skewX, skewY }) =>
            <animated.div
              style={{
                transform: interpolate(
                  [x, y, skewX, skewY],
                  (x, y, skewX, skewY) =>
                    `translateY(${y}%)`
                )
              }}
              className={css`${TitleOverlay}`}
            />
          }
        </Spring>
            <div className={css`padding: 1rem;`}>
                <MetaContainer>
                  <span className={css`z-index: 1;font-size: 0.8rem;color: white;`}>{new Date(post.dateAndTime).toLocaleDateString()}</span>
                  <Tags tags={post.tags}/>
                </MetaContainer>
                  <Link to={`/post/${post.slug}`}>
                    <Spring
                      native
                      impl={TimingAnimation}
                      config={{ duration: 400, easing: Easing.elastic(2) }}
                      to={{
                        y: hover ? 6 : 0,
                      }}
                    >
                      {({ y }) =>
                        <animated.div style={{ transform: interpolate(y, (y) => `translateY(${y}px)`) }}>
                          <PostHeading hover={hover}>
                            {post.title}
                          </PostHeading>
                        </animated.div>
                      }
                    </Spring>
                  </Link>
                  </div>
        </GridItem>
    )
  }
}
export const Tags = ({tags}) => {
  return (
    <div className={css`z-index:1;`}>
      { tags && tags.map(({ tag }) => (
        <span className={Tag}>
        {tag}
        </span>
        ))
      }
    </div>
  )
}

export const GridOverlay = ({hover}) => {
  return (
      <Spring
        native
        impl={TimingAnimation}
        config={{ duration: 400, easing: Easing.ease }}
        to={{
          y: hover ? 0 : 100,
          x: hover ? 150 : 0,
          skewX: hover ? 0 : 45,
          skewY: hover ? 0 : 0,

        }}
      >
        {({ x, y, skewX, skewY }) =>
      <animated.div
        style={{
          transform: interpolate(
            [x, y, skewX, skewY],
            (x, y, skewX, skewY) =>
            `translateY(${y}%)`
          )
        }}
        className={css`${Overlay}`}
        />
      }
      </Spring>
  )
}
