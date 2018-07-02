import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import Panel from '../components/Panel';
import Container from '../components/Container';
import ListPosts from '../components/ListPosts';
;
const Tag = ({match}) => (
    <section>
      <ListPosts filter={{ tags_some: { tag: match.params.tag } }} />
    </section>
);


export default Tag;
