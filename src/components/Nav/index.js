import React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

import FilterActionDropdown from './ActionDropdown/FilterActionDropdown';

// TODO: move to constants file somewhere
const genres = [
  'Adventure',
  'Children',
  'Drama',
  'Fantasy',
  'Horror',
  'Humor',
  'Mystery',
  'Non-Fiction',
  'Romance',
  'Sci-Fi'
];

const genders = [ 'Female', 'Male', 'Non-Binary' ];

const createFilter = (key) => (value) => ({
  filter: { [key]: { $in: [value] } }
});

const createGenreFilter = createFilter('genre');
const createGenderFilter = createFilter('author.gender');

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
        <FilterActionDropdown
          title='Genre'
          eventKey={2}
          items={genres}
          createFilter={createGenreFilter}
          updateSearchParams={updateSearchParams} />
        <FilterActionDropdown
          title='Gender'
          eventKey={3}
          items={genders}
          createFilter={createGenderFilter}
          updateSearchParams={updateSearchParams} />
        <NavItem eventKey={4}>Admin</NavItem>
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

export default Navigation;
