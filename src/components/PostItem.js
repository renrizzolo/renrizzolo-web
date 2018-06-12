import React, { Component } from 'react'
import styled, { css } from 'react-emotion';
import {Spring } from 'react-spring';
import { Link } from 'react-router-dom';
import { Img, Heading, Grid } from '../components/common';

const PostHeading = css`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
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
      <div key={`post-${post.id}`} style={this.props.styles} className={css`position: relative;`}>
            <Link to={`/post/${post.slug}`}>
              {
                post.coverImage &&
                <Img
                  // className={css`max-width: 300px;`}
                  alt={post.title}
                  src={`https://media.graphcms.com/resize=w:300,h:300,fit:crop/${post.coverImage.handle}`}
                />
              }
              <Spring 
                from={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                }} 
                to={{ 
                  backgroundColor: hover ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)',
                }}
              >
              {(backgroundColor) =>
              <Heading onMouseEnter={() => this.setState({ hover: true })} onMouseOut={() => this.setState({ hover: false })}  className={css`${PostHeading} ${backgroundColor}`} >{post.title}</Heading>
              }
              </Spring>
            </Link>
        </div>
    )
  }
}
