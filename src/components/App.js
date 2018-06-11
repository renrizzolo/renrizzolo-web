import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bloki, { BlokiProvider } from 'bloki';
import { ThemeProvider } from 'emotion-theming';

import Header from './Header';
import Home from './Home';
import About from './About';
import Post from './Post';

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
  }
};

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    font-family: 'Helvetica', sans-serif;
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

`;

const blokiTheme = {
  spacing: 16,
  columns: 12,
  breakpoints: {
    xs: 360,
    sm: 720,
    md: 900,
    lg: 1080,
  },
};

// @todo: Make bloki use className so the styles can be overridden
const Root = css`
    margin: 0 auto!important;
`;
const App = () => (
  <ThemeProvider theme={emotionTheme}>
    <BlokiProvider theme={blokiTheme}>
      <Router>
        <Bloki
          className={css`${Root}`}
          justify="center"
          mdUpStyle={{ maxWidth: blokiTheme.breakpoints.sm - 32 }}
          lgUpStyle={{ maxWidth: blokiTheme.breakpoints.md - 32 }}
        >
          <Header />
          <main>
            <Bloki row>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/post/:slug" component={Post} />
            </Bloki>
          </main>
        </Bloki>
      </Router>
    </BlokiProvider>
  </ThemeProvider>
);

export default App;
