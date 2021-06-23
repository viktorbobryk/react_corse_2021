import React, { Component } from 'react';

import './App.css';
import Layout from './hoc/Layout';
import Home from './Pages/Home';
import Editor from './Pages/Editor/Editor';
import SignIn from './Pages/SignIn/SignIn';
// import Settings from './Pages/Settings/Settings';
import SignUp from './Pages/SignUp/SignUp';
// import Article from './Pages/Article/Article';
// import Profile from './Pages/Profile/Profile';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
        <Editor />
        {/* <Settings /> */}
        <SignIn />
        <SignUp />
        {/* <Article {...{ comments }} article={articlesList[0]} /> */}
        {/* <Profile {...{ articlesList }} /> */}
      </Layout>
    );
  }
}

export default App;
