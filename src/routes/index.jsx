import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Article from '../Pages/Article';
import EditorForm from '../Pages/EditorForm';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';
import SignUpForm from '../Pages/SignUpForm';
import SignInForm from '../Pages/SignInForm';
import Layout from '../hoc/Layout';
import ROUTES from './routesConstants';
import { Consumer as AuthConsumer } from '../contexts/Auth';

const Routes = () => (
  <AuthConsumer>
    {(isLoggedIn) => (
      <Layout isLoggedIn={isLoggedIn}>
        { isLoggedIn
          ? (
            <Switch>
              <Route path={ROUTES.HOME} exact component={Home} />
              <Route path={ROUTES.EDITOR} component={EditorForm} />
              <Route path={ROUTES.SETTINGS} component={Settings} />
              <Route path={ROUTES.PROFILE} component={Profile} />
              <Route path={ROUTES.ARTICLE} component={Article} />
              <Redirect to="/" />
            </Switch>
          )
          : (
            <Switch>
              <Route path={ROUTES.HOME} exact componen={Home} />
              <Route path={ROUTES.SIGN_IN} component={SignInForm} />
              <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
              <Redirect to="/" />
            </Switch>
          )}
      </Layout>
    )}
  </AuthConsumer>

);

export default Routes;
