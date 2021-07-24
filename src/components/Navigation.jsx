import React from 'react';
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';
import useAuth from '../auth/useAuth';

const Navigation = () => {
  const { isLogout } = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" bg="dark">
        <Navbar.Brand>
          <Link to={routes.home}>TaskManager</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link to={routes.proyects}>Proyectos</Link>
            </Nav.Link>
            <NavDropdown title="Admin">
              <NavDropdown.Item>
                <Link to={routes.admin.users}>Usuarios</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to={routes.login}>Iniciar Sesion</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={routes.register}>Registrarse</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={routes.account}>Mi Cuenta</Link>
            </Nav.Link>
            <Nav.Link as="button" to={routes.account} onClick={isLogout}>
              Cerrar Sesion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
