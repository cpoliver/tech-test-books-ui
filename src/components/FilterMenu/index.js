import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { assoc, map, prop } from 'ramda';

const wrapOptions = map((label) => ({
  label, value: label.toLowerCase()
}));

const formatSearchParams = ({ filters, searchParams }) => {
  // console.log(filters);
  return assoc('filters', map(prop('value'), filters), searchParams);
};

const FilterMenu = ({ options, searchParams, updateSearchParams }) => {
  const { filters } = searchParams;

  return (
    <Select
      name="filter"
      value={filters}
      multi={true}
      options={wrapOptions(options)}
      onChange={(filters) => updateSearchParams(formatSearchParams({ filters, searchParams }))} />
  );
};

FilterMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default FilterMenu;
