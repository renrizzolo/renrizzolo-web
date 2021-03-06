import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './App';

import registerServiceWorker from './registerServiceWorker';


// GraphCMS project endpoint
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cji9mx4qi1ae801609c703thd';
// GraphCMS beta is borked
// const GRAPHCMS_API = 'https://api-uswest.graphcms.com/v1/cjid6jtrm00r401eejq2dlcd3/master';
const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
