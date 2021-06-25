import React, { Component } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider as AuthProvider } from './contexts/Auth';

const isLogged = true;
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider value={isLogged}>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;
