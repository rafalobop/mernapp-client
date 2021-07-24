import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" bg="dark">
        <Navbar.Brand>
          <Link to="/">TaskManager</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link to="/proyects">Proyectos</Link>
            </Nav.Link>
            <NavDropdown title="Admin">
              <NavDropdown.Item>
                <Link to="/admin/users">Usuarios</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/login">Iniciar Sesion</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">Registrarse</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/account">Mi Cuenta</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
