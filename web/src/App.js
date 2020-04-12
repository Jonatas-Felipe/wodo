import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import history from '~/services/history';

import GlobalStyles from '~/styles/global';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyles />
    </Router>
  );
}

export default App;
