import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Glyphicon, MenuItem} from 'react-bootstrap';

import { searchParamsType } from '../../lib/types';

const renderTitle = (itemsPerPage) => (
  <span>
    <Glyphicon glyph="th-large" />&nbsp;{itemsPerPage}
  </span>
);

const renderMenuItem = (option) => (<MenuItem key={option} eventKey={option}>{option}</MenuItem>);

const ItemsPerPageMenu = ({ options, searchParams, updateSearchParams }) => (
  <DropdownButton
    title={renderTitle(searchParams.itemsPerPage)}
    id="items-per-page-menu"
    onSelect={(value) => updateSearchParams({ itemsPerPage: value })}>
    {options.map(renderMenuItem)}
  </DropdownButton>
);

ItemsPerPageMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  searchParams: searchParamsType.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default ItemsPerPageMenu;
