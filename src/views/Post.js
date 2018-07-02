import React from 'react';
import Markdown from 'react-markdown';
import { Query } from 'react-apollo';
import styled, { css } from 'react-emotion';
import { singlePost } from '../queries';
import FadeIn from '../components/FadeIn';
import Container from '../components/Container';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Img, LargeHeading } from '../components/common';
import Date from '../components/Date';
import TagItem from '../components/TagItem';


const Header = styled('header')`
    background: white;
    padding: 0 24px;
    border-right: 1px solid;
    display: inline-block;
    border-top: 1px solid;
    margin-left: -24px;
    @media screen and (max-width: 899px) {
      border: none;
    }
`;
const ArticleContainer = styled(Container)`
   max-width: 800px; 
   margin-top: -95px; 
    @media screen and (max-width: 899px) {
      margin-top: 0;
    }
`;
const Post = ({ match }) => (
  <Query query={singlePost} variables={{ slug: match.params.slug }}>
    {({ loading, error, data: { post } }) => {
      if (loading) return <Loading />;
      if (error) return <Error>Couldn't load the post</Error>;
      return (
  <React.Fragment>
      <Date date={post.dateAndTime} />
      <Img
        className={css`object-fit: cover; max-height: 500px;`}
        alt={post.title}
        src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`}
      />
          <ArticleContainer>
            <FadeIn>
              <article>
                <Header>
                  <LargeHeading>{post.title}</LargeHeading>
                </Header>
                <Markdown
                  source={post.content}
                  escapeHtml={false}
                />
                <div>
                  {
                  post.tags && post.tags.map(tag => (
                    <TagItem tag={tag.tag} />
                  ))
                  }
                </div>
              </article>
            </FadeIn>
          </ArticleContainer>
  </React.Fragment>
      );
    }}
  </Query>
);


export default Post;
