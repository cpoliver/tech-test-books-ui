import React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

// <li> used as workdaround for this: https://github.com/react-bootstrap/react-bootstrap/issues/2365
// unfortunately this leads to console errors

const Navigation = ({ itemsPerPage, page, loadMoreBooks }) => (
  <Navbar inverse collapseOnSelect staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Casumo Books</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="Sort" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}
            onSelect={() => loadMoreBooks({ itemsPerPage, page, sort: { 'title': 1 } })}>
            Book Title
          </MenuItem>
          <MenuItem eventKey={1.2}
            onSelect={() => loadMoreBooks({ itemsPerPage, page, sort: { 'author.surname': 1 } })}>
            Author Surame
          </MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={2} title="Filter" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}>Adventure</MenuItem>
          <MenuItem eventKey={2.2}>Children</MenuItem>
          <MenuItem eventKey={2.3}>Drama</MenuItem>
          <MenuItem eventKey={2.4}>Fantasy</MenuItem>
          <MenuItem eventKey={2.5}>Horror</MenuItem>
          <MenuItem eventKey={2.6}>Humor</MenuItem>
          <MenuItem eventKey={2.7}>Mystery</MenuItem>
          <MenuItem eventKey={2.8}>Non-Fiction</MenuItem>
          <MenuItem eventKey={2.9}>Romance</MenuItem>
          <MenuItem eventKey={2.10}>Sci-Fi</MenuItem>
        </NavDropdown>
        <NavItem eventKey={3.1}>Admin</NavItem>
      </Nav>
      <Nav pullRight>
        <li role="presentation"><a href="https://github.com/cpoliver">Github</a></li>
        <li role="presentation"><a href="https://linkedin.com/in/cpoliver">LinkedIn</a></li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
