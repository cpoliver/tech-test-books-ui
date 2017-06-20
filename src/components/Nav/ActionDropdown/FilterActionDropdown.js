import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

const createFilter = (genre) => ({
  filter: { genre: { $in: [genre] } }
});

const renderMenuItem = ({ name, eventKey, updateSearchParams }, key) => (
  <MenuItem
    eventKey={eventKey + (key / 10)}
    onSelect={() => updateSearchParams(createFilter(name.toLowerCase()))}>
    {name}
  </MenuItem>
);

export const FilterActionDropdown = ({ title, items, eventKey, updateSearchParams }) => (
  <NavDropdown eventKey={eventKey} title={title} id="basic-nav-dropdown">
    {items.map((name, key) => renderMenuItem({ name, key, eventKey, updateSearchParams }))}
  </NavDropdown>
);

export default FilterActionDropdown;
