import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../../styles/Header.css';

const header = () => (
  <Navbar
    collapseOnSelect
    expand="md"
    className="d-flex px-md-5 bg-info align-items-center"
  >
    <Link to="/" className="text-decoration-none">
      <Navbar.Brand className="text-white">Business Assistant</Navbar.Brand>
    </Link>
    <Navbar.Toggle
      as="button"
      className="bg-light"
      aria-controls="responsive-navbar-nav"
    />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="w-100 d-flex justify-content-end">
        <NavLink
          activeClassName="main-nav-active"
          className="mr-4 text-decoration-none font-weight-normal main-nav"
          to="about"
        >
          About
        </NavLink>
        <NavLink
          activeClassName="main-nav-active"
          className="mr-4 text-decoration-none font-weight-normal main-nav"
          to="analytics"
        >
          Analytics
        </NavLink>
        <NavLink
          activeClassName="main-nav-active"
          className="mr-4 text-decoration-none font-weight-normal main-nav"
          to="organizations"
        >
          Organizations
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default header;
