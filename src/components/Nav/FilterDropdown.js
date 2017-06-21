import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

const renderMenuItem = ({ name, key, eventKey, createFilter, updateSearchParams }) => (
  <MenuItem key={key}
    eventKey={eventKey + (key / 10)}
    onSelect={() => updateSearchParams(createFilter(name.toLowerCase()))}>
    {name}
  </MenuItem>
);

const FilterDropdown = (props) => {
  const { title, items, eventKey } = props;

  return (
    <NavDropdown eventKey={eventKey} title={title} id="basic-nav-dropdown">
      {items.map((name, key) => renderMenuItem({ ...props, name, key }))}
    </NavDropdown>
  );
}

export default FilterDropdown;
