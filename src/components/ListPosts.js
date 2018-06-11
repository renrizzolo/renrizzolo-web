import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Bloki from 'bloki';
import Panel from './Panel';
const POSTS_PER_PAGE = 4;

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      dateAndTime
      coverImage {
        handle
      }
    },
    _allPostsMeta {
      count
    }
  }
`;

const allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE,
};

const ListPosts = () => (
  <section>
    <Query query={allPosts} variables={{ ...allPostsQueryVars, notifyOnNetworkStatusChange: true }}>
      {({
        loading, error, data: { allPosts, _allPostsMeta }, networkStatus 
        }, loadMorePosts) => {
      console.log(loading, error, allPosts);

      if (loading) return <div>Loading...</div>;
      if (error) return `Error! ${error.message}`;
      const areMorePosts = _allPostsMeta.count > allPosts.length;
      return (
        <React.Fragment>
          <ul className="Home-ul">
            {allPosts.length ?
              allPosts.map(post => (
                <li className="Home-li" key={`post-${post.id}`}>
                  <Link to={`/post/${post.slug}`} className="Home-link">
                    <div className="Home-placeholder">
                      <img
                        alt={post.title}
                        className="Home-img"
                        src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`}
                      />
                    </div>
                    <h3>{post.title}</h3>
                  </Link>
                </li>

            ))
              : 
              <Panel>
                <h3>No posts</h3>
              </Panel>
              }
          </ul>
          <div className="Home-showMoreWrapper">
            {areMorePosts
              ? <button className="Home-button" disabled={loading} onClick={() => loadMorePosts()}>
                {loading ? 'Loading...' : 'Show More Posts'}
              </button>
              : ''}
          </div>
        </React.Fragment>
      );
    }}
    </Query>
  </section>
);


export default ListPosts;
