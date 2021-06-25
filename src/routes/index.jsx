import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
import { Consumer as AuthConsumer } from '../contexts/Auth';
import withAuth from '../hoc/withAuth/withAuth';

const Routes = () => (
  <AuthConsumer>
    {(isLoggedIn) => (
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
    )}
  </AuthConsumer>

);

export default Routes;
