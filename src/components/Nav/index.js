import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

import ItemsPerPageDropdown from './ItemsPerPageDropdown';
import { searchParamsType } from '../../lib/types';

const createSort = (field, desc = false) => ({
  sort: { [field]: desc ? -1 : 1 }
});

const Navigation = ({ searchParams, updateSearchParams }) => (
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
            onSelect={() => updateSearchParams(createSort('title'))}>
            Book Title
          </MenuItem>
          <MenuItem eventKey={1.2}
            onSelect={() => updateSearchParams(createSort('author.surname'))}>
            Author Surame
          </MenuItem>
        </NavDropdown>
        <ItemsPerPageDropdown
          title='Items per Page'
          eventKey={4}
          updateSearchParams={updateSearchParams} />
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={5} onSelect={() => window.open('https://github.com/cpoliver')}>
          Github
        </NavItem>
        <NavItem eventKey={6} onSelect={() => window.open('https://linkedin.com/in/cpoliver')}>
          LinkedIn
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Navigation.propTypes = {
  searchParams: searchParamsType,
  updateSearchParams: PropTypes.func.isRequired
};

export default Navigation;
