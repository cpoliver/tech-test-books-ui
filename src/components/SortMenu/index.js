import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, MenuItem, SplitButton} from 'react-bootstrap';
import { pipe, replace } from 'ramda';

import { searchParamsType } from '../../lib/types';
import './sort-menu.css';

const spaceCamelCase = replace(/([a-z]{1})([A-Z]{1})/, '$1 $2');
const dotToSpace = replace('.', ' ');
const toDisplayName = pipe(spaceCamelCase, dotToSpace);

const renderMenuItem = (option) => (
  <MenuItem className="capitalize" key={option} eventKey={option}>
    {toDisplayName(option)}
  </MenuItem>
);

const renderTitle = ({ property, direction }) => (
  <span>
    {toDisplayName(property)}&nbsp;
    <Glyphicon glyph={direction > 0 ? 'sort-by-alphabet' : 'sort-by-alphabet-alt'} />
  </span>
);

const SortMenu = ({ options, searchParams, updateSearchParams }) => (
  <div className="sort-menu">
    <SplitButton
      className="capitalize"
      title={renderTitle(searchParams.sort)}
      id="sort-menu"
      onClick={() => updateSearchParams({ sort: { direction: -searchParams.sort.direction } })}
      onSelect={(value) => updateSearchParams({ sort: { property: value } })}>
      {options.map(renderMenuItem)}
    </SplitButton>
  </div>
);

SortMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  searchParams: searchParamsType.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default SortMenu;
