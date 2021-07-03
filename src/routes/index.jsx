import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import Article from '../Pages/Article';
import Editor from '../Pages/Editor';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Layout from '../hoc/Layout';
import PageNotFound from '../Pages/PageNotFound';
import ROUTES from './routesConstants';
import withAuth from '../hoc/withAuth/withAuth';

// eslint-disable-next-line react/prop-types
const Routes = ({ isLoggedIn }) => (
  <Layout>
    <Switch>
      <Route path={ROUTES.HOME} exact component={Home} />
      <Route path={ROUTES.SIGN_IN} component={withAuth(SignIn, !isLoggedIn)} />
      <Route path={ROUTES.SIGN_UP} component={withAuth(SignUp, !isLoggedIn)} />
      <Route path={ROUTES.EDITOR} component={withAuth(Editor, isLoggedIn)} />
      <Route path={ROUTES.SETTINGS} component={withAuth(Settings, isLoggedIn)} />
      <Route path={ROUTES.PROFILE} component={withAuth(Profile, isLoggedIn)} />
      <Route path={ROUTES.ARTICLE} component={withAuth(Article, isLoggedIn)} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Layout>

);

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isToken,
});

export default connect(mapStateToProps)(Routes);
