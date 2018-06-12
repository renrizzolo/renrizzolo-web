import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Trail } from 'react-spring';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import Bloki from 'bloki';
import Panel from './Panel';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Img, Heading, Grid } from '../components/common';
import PostItem from '../components/PostItem';
import { allPosts } from '../queries';
import { DEFAULT_DEPRECATION_REASON } from 'graphql';

const POSTS_PER_PAGE = 4;

const allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE,
};

const ListPosts = (props) => {
  const { skip, first, filter } = props;
  console.log(filter);
  
  return (
    <section>
      <Query
        query={allPosts}
        variables={{
        skip, first, filter, notifyOnNetworkStatusChange: true 
        }}
      >
        {({
          loading, error, data: { allPosts, _allPostsMeta }, networkStatus, loadMorePosts
          }) => {
        console.log(loading, error, allPosts);
          if (loading) return <Loading />;
          if (error) return <Error>Couldn't load the post</Error>;
          const areMorePosts = _allPostsMeta.count > allPosts.length && allPosts.length > 0;
        return (
          <Grid>
            
            {allPosts.length ?
              <Trail from={{ opacity: 0 }} to={{ opacity: 1 }} keys={allPosts.map(post => post.id)}>

               { allPosts.map(post => styles => (
                  <PostItem post={post} styles={styles}/>
                ))
              }
              </Trail>
                :
                <Panel>
                  <h3>Hmmm. Couldn't find anything.</h3>
                </Panel>
                }
            <Bloki row>
              {areMorePosts
                ? <button className="Home-button" disabled={loading} onClick={() => loadMorePosts()}>
                  {loading ? 'Loading...' : 'Show More Posts'}
                </button>
                : ''}
            </Bloki>
          </Grid>
        );
      }}
      </Query>
    </section>
  );
};

ListPosts.propTypes = {
  skip: PropTypes.number,
  first: PropTypes.number,
  filter: PropTypes.object,
};
ListPosts.defaultProps = {
  skip: 0,
  first: 4,
  filter: {},
};
export default ListPosts;
