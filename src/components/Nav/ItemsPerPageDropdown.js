import React from 'react';
import PropTypes from 'prop-types';
import { NavDropdown, MenuItem } from 'react-bootstrap';

import { ITEMS_PER_PAGE_OPTIONS } from '../../lib/constants';

const renderMenuItem = ({ amount, key, eventKey, updateSearchParams }) => (
  <MenuItem key={key}
    eventKey={eventKey + (key / 10)}
    onSelect={() => updateSearchParams({ itemsPerPage: amount })}>
    {amount}
  </MenuItem>
);

const ItemsPerPageDropdown = ({ title, eventKey, updateSearchParams }) => (
  <NavDropdown eventKey={eventKey} title={title} id="basic-nav-dropdown">
    {ITEMS_PER_PAGE_OPTIONS.map((amount, key) => renderMenuItem({ amount, key, eventKey, updateSearchParams }))}
  </NavDropdown>
);

ItemsPerPageDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  eventKey: PropTypes.number.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default ItemsPerPageDropdown;
