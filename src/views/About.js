import React from 'react';
import { Query } from 'react-apollo';
import styled, { css } from 'react-emotion';
import Bloki from 'bloki';
import Panel from '../components/Panel';
import Container from '../components/Container';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { allAuthors } from '../queries';
import { Img, Heading } from '../components/common';



const Paragraph = styled('p')`

`;

const About = () => (
  <Container>
    <section>
      <Query query={allAuthors}>
        {({
          loading, error, data: { allAuthors }, networkStatus, }) => {
        console.log(loading, error, allAuthors);

          if (loading) return <Loading />;
          if (error) return <Error>Couldn't load the post</Error>;
          return (
            allAuthors && allAuthors.length ?
            allAuthors.map(author => (

              <React.Fragment key={author.id}>
              <Bloki row>
                <Bloki innerSpacing={false} col xl={1} lg={2} md={2} sm={2} xs={12}>
                  <Img
                    className={css`min-width: 50px;max-width: 90px;`}
                    alt={author.name}
                    src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${author.avatar.handle}`}
                  />
                </Bloki>
                <Bloki innerSpacing={false} col xl={11} lg={10} md={10} sm={10} xs={12}>
                  <Heading>Hello! My name is {author.name}</Heading>
                  <Paragraph>{author.about}</Paragraph>
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
