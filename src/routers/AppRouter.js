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

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/proyects" component={ProyectsPage} />
          <Route exact path="/proyect/:proyectId" component={ProyectPage} />
          <Route exact path="/admin/users/" component={UsersPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
