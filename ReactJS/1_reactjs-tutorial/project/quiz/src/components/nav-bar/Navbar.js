import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import './Navbar.scss'

const NavbarComponent = () => {
  return (
    <div className='navbar-container'>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to='/' className={({ isActive, isPending }) =>
            isActive
              ? "active navbar-brand"
              : isPending
                ? "pending navbar-brand"
                : "navbar-brand"
          }>React-Bootstrap</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/' className={({ isActive, isPending }) =>
                isActive
                  ? "active nav-link"
                  : isPending
                    ? "pending nav-link"
                    : "nav-link"
              }>Home</NavLink>
              <NavLink to='admin' className={({ isActive, isPending }) =>
                isActive
                  ? "active nav-link"
                  : isPending
                    ? "pending nav-link"
                    : "nav-link"
              } >Admin</NavLink>
              <NavLink to='user' className={({ isActive, isPending }) =>
                isActive
                  ? "active nav-link"
                  : isPending
                    ? "pending nav-link"
                    : "nav-link"
              }>User</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default NavbarComponent;

