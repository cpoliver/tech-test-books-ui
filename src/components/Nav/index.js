import React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

const createFilter = (genre) => ({
  filter: { genre: { $in: [genre] } }
});

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
        <NavDropdown eventKey={2} title="Genres" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}
            onSelect={() => updateSearchParams(createFilter('adventure'))}>
            Adventure
          </MenuItem>
          <MenuItem eventKey={2.2}
            onSelect={() => updateSearchParams(createFilter('children'))}>
            Children
          </MenuItem>
          <MenuItem eventKey={2.3}
            onSelect={() => updateSearchParams(createFilter('drama'))}>
            Drama
          </MenuItem>
          <MenuItem eventKey={2.4}
            onSelect={() => updateSearchParams(createFilter('fantasy'))}>
            Fantasy
          </MenuItem>
          <MenuItem eventKey={2.5}
            onSelect={() => updateSearchParams(createFilter('horror'))}>
            Horror
          </MenuItem>
          <MenuItem eventKey={2.6}
            onSelect={() => updateSearchParams(createFilter('humor'))}>
            Humor
          </MenuItem>
          <MenuItem eventKey={2.7}
            onSelect={() => updateSearchParams(createFilter('mystery'))}>
            Mystery
          </MenuItem>
          <MenuItem eventKey={2.8}
            onSelect={() => updateSearchParams(createFilter('non-fiction'))}>
            Non-Fiction
          </MenuItem>
          <MenuItem eventKey={2.9}
            onSelect={() => updateSearchParams(createFilter('romance'))}>
            Romance
          </MenuItem>
          <MenuItem eventKey={2.10}
            onSelect={() => updateSearchParams(createFilter('sci-fi'))}>
            Sci-Fi
          </MenuItem>
        </NavDropdown>
        <NavItem eventKey={3}>Admin</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={4} onSelect={() => window.open('https://github.com/cpoliver')}>
          Github
        </NavItem>
        <NavItem eventKey={5} onSelect={() => window.open('https://linkedin.com/in/cpoliver')}>
          LinkedIn
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
