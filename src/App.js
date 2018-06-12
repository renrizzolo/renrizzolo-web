import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bloki, { BlokiProvider } from 'bloki';
import { ThemeProvider } from 'emotion-theming';

import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Post from './views/Post';
import Tag from './views/Tag';
import ListPosts from './components/ListPosts';

import { injectGlobal } from 'emotion';
import { css } from 'react-emotion';

const emotionTheme = {
  paddingXl: '4rem',
  paddingLg: '2rem',
  paddingMd: '1.5rem',
  paddingSm: '1rem',
  paddingXs: '0.5rem',
  paddingXxs: '0.33rem',
  borderRadius: '3px',
  colors: {
    primary: '#e3778c',
    primaryDark: '#c22954',
    brand: '#50363d',
    error: 'crimson',
  }
};

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,800');
  body {
    font-size: 16px;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${emotionTheme.colors.primary};
    &:hover {
      color: ${emotionTheme.colors.primaryDark};
    }
  }
  figure {
    margin: 0;
  }
  blockquote {
    border-left: 8px solid #e2e2e2;
    padding-left: 8px;
    font-weight: bold;
    font-size: 120%;
    color: #50363d;
  }
  code {
    background-color: #e2e2e2;
    padding: 1px 4px;
    border-radius: 2px;
  }
  pre {
    padding: 1rem;
    white-space: pre-wrap;
    background-color: #fafafa;
    & > code {
      background-color:inherit;
      padding: 0px;
      border-radius: 0px;
    }
  }

`;

const blokiTheme = {
  spacing: 16,
  columns: 12,
  breakpoints: {
    xs: 420,
    sm: 720,
    md: 900,
    lg: 1080,
  },
};

// @todo: Make bloki use className so the styles can be overridden
const Root = css`
    margin: 0 auto!important;
    height: 100vh;
`;
const App = () => (
  <ThemeProvider theme={emotionTheme}>
    <BlokiProvider theme={blokiTheme}>
      <Router>
        <Bloki
          innerSpacing={false}
          wrap={false}
          className={css`${Root}`}
          justify="flex-start"
          align="flex-start"
          mdUpStyle={{ maxWidth: blokiTheme.breakpoints.sm - 32 }}
          lgUpStyle={{ maxWidth: 1440 }}
        >
          <Bloki row>
            <Header />
            <main className={css`width: 100%;`}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/post/:slug" component={Post} />
              <Route path="/tag/:tag" component={Tag}/>

            </main>
          </Bloki>
        </Bloki>
      </Router>
    </BlokiProvider>
  </ThemeProvider>
);

export default App;
