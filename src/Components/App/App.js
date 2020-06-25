import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../Routes';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

export default App;
