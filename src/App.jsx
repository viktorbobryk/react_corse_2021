import React, { Component } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import { Provider as AuthProvider } from './contexts/Auth';

const isLogged = true;
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AuthProvider value={isLogged}>
            <Routes />
          </AuthProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
