import React from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import ListPosts from '../components/ListPosts';
export default () => {
  return (
    <div style={{width: '100%'}}>
      <h3>Posts</h3>
      <ListPosts />
    </div>
  )
}
