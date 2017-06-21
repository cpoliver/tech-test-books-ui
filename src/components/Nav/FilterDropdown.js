import React from 'react';
import PropTypes from 'prop-types';
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

FilterDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  eventKey: PropTypes.number.isRequired,
  createFilter: PropTypes.func.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default FilterDropdown;
