import React from 'react';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './auth/AuthProvider';

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};

export default App;
