import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, MenuItem, SplitButton} from 'react-bootstrap';

import { searchParamsType } from '../../lib/types';

const toDisplayName = (option) => option
 .replace('.', ' ')
 .replace(/([a-z]{1})([A-Z]{1})/, '$1 $2');

const renderMenuItem = (option) => (
  <MenuItem className="capitalize" key={option} eventKey={option}>
    {toDisplayName(option)}
  </MenuItem>
);

const renderTitle = ({ property, direction }) => (
  <span>
    {toDisplayName(property)}&nbsp;
    <Glyphicon glyph={direction > 0 ? 'sort-by-alphabet' : 'sort-by-alphabet'} />
  </span>
);

const FilterMenu = ({ options, searchParams, updateSearchParams }) => (
  <SplitButton className="capitalize"
    title={renderTitle(searchParams.sort)}
    id="sort-menu"
    onSelect={(value) => updateSearchParams({ sort: { property: value } })}>
    {options.map(renderMenuItem)}
  </SplitButton>
);

FilterMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  searchParams: searchParamsType,
  updateSearchParams: PropTypes.func.isRequired
};

export default FilterMenu;
