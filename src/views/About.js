import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'react-emotion';
import Bloki from 'bloki';
import Panel from '../components/Panel';
import Container from '../components/Container';

const Img = styled('img')`
width:100%;
height: auto;
`;

export const allAuthors = gql`
  query allAuthors {
    allAuthors {
      id
      name
      bibliography
      avatar {
        handle
      }
    }
  }
`;

const About = () => (
  <Container>
    <section>
      <Query query={allAuthors}>
        {({
          loading, error, data: { allAuthors }, networkStatus,
      }, loadMorePosts) => {
        console.log(loading, error, allAuthors);

        if (loading) return <div>Loading...</div>;
        if (error) return `Error! ${error.message}`;
          return (
            allAuthors.length ?
            allAuthors.map(author => (

              <React.Fragment key={author.id}>
              <Bloki row>
                <Bloki col xl={2} lg={2} md={2} sm={2} xs={4}>
                  <Img

                    alt={author.name}
                    src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${author.avatar.handle}`}
                  />
                </Bloki>
                <Bloki col xl={10} lg={10} md={10} sm={10} xs={8}>
                  <h1>Hello! My name is {author.name}</h1>
                  <p>{author.bibliography}</p>
                </Bloki>
              </Bloki>
            </React.Fragment>
          ))
          :
            <Panel>
            <h3>No Author!</h3>
          </Panel>
        );
      }}
      </Query>
    </section>
  </Container>

);


export default About;
