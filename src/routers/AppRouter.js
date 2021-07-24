import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import ProyectsPage from '../pages/ProyectsPage';
import NotFoundPage from '../pages/NotFoundPage';
import UsersPage from '../pages/admin/UsersPage';
import ProyectPage from '../pages/ProyectPage';
import Layout from '../components/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';
const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage} />
          <PublicRoute exact path={routes.login} component={LoginPage} />
          <PublicRoute exact path={routes.register} component={RegisterPage} />
          <PrivateRoute exact path={routes.account} component={AccountPage} />
          <PrivateRoute exact path={routes.proyects} component={ProyectsPage} />
          <PrivateRoute exact path={routes.proyect()} component={ProyectPage} />
          <PrivateRoute
            hasRole={roles.admin}
            exact
            path={routes.admin.users}
            component={UsersPage}
          />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
