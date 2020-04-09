import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import styles from './Header.css';

const header = () => (
  <Navbar
    collapseOnSelect
    expand="md"
    variant="light"
    bg="light"
    className="d-flex align-items-center"
  >
    <Link to="/" className="text-light text-decoration-none">
      <Navbar.Brand>Business Assistant</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="w-100">
        <NavLink activeClassName={styles.active} className="mr-2 text-decoration-none" to="about">
          About
        </NavLink>
        <NavLink className="text-decoration-none" to="analytics">
          Analytics
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default header;
