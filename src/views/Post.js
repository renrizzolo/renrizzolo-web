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

const Post = ({ match }) => (
  <Query query={singlePost} variables={{ slug: match.params.slug }}>
    {({ loading, error, data: { post } }) => {
      if (loading) return <Loading />;
      if (error) return <Error>Couldn't load the post</Error>;
      return (
  <React.Fragment>
    
    <Container>
      <Date date={post.dateAndTime} />
      <Img
        className={css`object-fit: cover; max-height: 500px;`}
        alt={post.title}
        src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`}
      />
    </Container>
    <Container style={{maxWidth: 800}}>

            <FadeIn>
              <article>
                <header className={css`margin-bottom: 1rem;`}>
                  <LargeHeading>{post.title}</LargeHeading>
                </header>

                <Markdown
                  source={post.content}
                  escapeHtml={false}
                />
              </article>
            </FadeIn>

    </Container>
  </React.Fragment>
      );
    }}
  </Query>
);


export default Post;
