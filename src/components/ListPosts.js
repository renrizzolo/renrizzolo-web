import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import Panel from './Panel';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { allPosts } from '../queries';

const POSTS_PER_PAGE = 4;

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
        if (loading) return <Loading />;
        if (error) return <Error>Couldn't load the post</Error>;
      const areMorePosts = _allPostsMeta.count > allPosts.length;
      return (
        <React.Fragment>
          <ul>
            {allPosts.length ?
              allPosts.map(post => (
                <li key={`post-${post.id}`}>
                  <Link to={`/post/${post.slug}`}>
                    <div>
                      <img
                        alt={post.title}
                        src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`}
                      />
                    </div>
                    <h3>{post.title}</h3>
                  </Link>
                </li>

            ))
              : 
              <Panel>
                <h3>If I made a post, it'd be here.</h3>
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
