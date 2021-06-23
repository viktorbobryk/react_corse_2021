import React, { Component } from 'react';

import './App.css';
import Routes from './routes';
import { Provider as AuthProvider } from './contexts/Auth';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <AuthProvider value={{ isLoggedIn: false }}>
        <Routes />
      </AuthProvider>
    );
  }
}

export default App;
