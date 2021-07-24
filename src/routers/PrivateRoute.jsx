import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const PrivateRoute = ({ hasRole: role, ...rest }) => {
  const { hasRole, isLogged } = useAuth();

  if (!isLogged()) return <Redirect to={routes.login} />;

  if (role && !hasRole(role)) return <Redirect to={routes.home} />;

  return (
    <>
      <Route {...rest} />
    </>
  );
};

export default PrivateRoute;
