import React from 'react';
import useAuth from '../auth/useAuth';

const LoginPage = () => {
  const userCredentials = { id: 1 };
  const { isLogin } = useAuth();
  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={() => isLogin(userCredentials)}>iniciar sesion</button>
    </div>
  );
};

export default LoginPage;
