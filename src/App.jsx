import React from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout';
// import Home from './Pages/Home/Home';
// import Editor from './Pages/Editor/Editor';
// import SignIn from './Pages/SignIn/SignIn';
// import Settings from './Pages/Settings/Settings';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Editor /> */}
      {/* <Settings /> */}
      {/* <SignIn /> */}
      <SignUp />
    </Layout>
  );
}

export default App;
