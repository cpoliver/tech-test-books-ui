import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, DropdownButton, Glyphicon, MenuItem} from 'react-bootstrap';

import { searchParamsType } from '../../lib/types';

const renderTitle = (itemsPerPage) => (
  <span>
    <Glyphicon glyph="th-large" />&nbsp;{itemsPerPage}
  </span>
);

const renderMenuItem = (option) => (<MenuItem key={option} eventKey={option}>{option}</MenuItem>);

const ItemsPerPageMenu = ({ options, searchParams, updateSearchParams }) => (
  <ButtonGroup justified>
    <DropdownButton
      block
      title={renderTitle(searchParams.itemsPerPage)}
      id="items-per-page-menu"
      onSelect={(value) => updateSearchParams({ itemsPerPage: value })}>
      {options.map(renderMenuItem)}
    </DropdownButton>
  </ButtonGroup>
);

ItemsPerPageMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  searchParams: searchParamsType.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default ItemsPerPageMenu;
