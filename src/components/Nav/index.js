import React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

const applyFilter = (genre, searchParams) => ({
  ...searchParams,
  filter: { genre: { $in: [genre] } }
});

const applySort = (field, searchParams, desc = false) => ({
  ...searchParams,
  sort: { [field]: desc ? -1 : 1 }
});

const Navigation = ({ searchParams, fetchBooks }) => (
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
            onSelect={() => fetchBooks(applySort('title', searchParams))}>
            Book Title
          </MenuItem>
          <MenuItem eventKey={1.2}
            onSelect={() => fetchBooks(applySort('author.surname', searchParams))}>
            Author Surame
          </MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={2} title="Genres" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}
            onSelect={() => fetchBooks(applyFilter('adventure', searchParams))}>
            Adventure
          </MenuItem>
          <MenuItem eventKey={2.2}
            onSelect={() => fetchBooks(applyFilter('children', searchParams))}>
            Children
          </MenuItem>
          <MenuItem eventKey={2.3}
            onSelect={() => fetchBooks(applyFilter('drama', searchParams))}>
            Drama
          </MenuItem>
          <MenuItem eventKey={2.4}
            onSelect={() => fetchBooks(applyFilter('fantasy', searchParams))}>
            Fantasy
          </MenuItem>
          <MenuItem eventKey={2.5}
            onSelect={() => fetchBooks(applyFilter('horror', searchParams))}>
            Horror
          </MenuItem>
          <MenuItem eventKey={2.6}
            onSelect={() => fetchBooks(applyFilter('humor', searchParams))}>
            Humor
          </MenuItem>
          <MenuItem eventKey={2.7}
            onSelect={() => fetchBooks(applyFilter('mystery', searchParams))}>
            Mystery
          </MenuItem>
          <MenuItem eventKey={2.8}
            onSelect={() => fetchBooks(applyFilter('non-fiction', searchParams))}>
            Non-Fiction
          </MenuItem>
          <MenuItem eventKey={2.9}
            onSelect={() => fetchBooks(applyFilter('romance', searchParams))}>
            Romance
          </MenuItem>
          <MenuItem eventKey={2.10}
            onSelect={() => fetchBooks(applyFilter('sci-fi', searchParams))}>
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
