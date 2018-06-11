import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'react-emotion';
import Bloki from 'bloki';
const Img = styled('img')`
width:100%;
height: auto;
`;
const About = ({ data: { loading, error, allAuthors } }) => {
  if (error) return <h1>Error fetching authors!</h1>;
  if (!loading) {
    return (

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
    );
  }
  return <h2>Loading author...</h2>;
};

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

export default graphql(allAuthors)(About);
