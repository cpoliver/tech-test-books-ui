import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

const ITEMS_PER_PAGE_OPTIONS = [8, 16, 24, 32, 64];

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

export default ItemsPerPageDropdown;
