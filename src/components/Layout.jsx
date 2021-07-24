import React from 'react';
import Navigation from '../components/Navigation';

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <h1>footer</h1>
    </>
  );
};

export default Layout;
