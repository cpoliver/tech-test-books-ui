import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { map, prop } from 'ramda';

const wrapOptions = map((label) => ({
  label, value: label.toLowerCase()
}));

const unwrapOptions = map(prop('value'));

const formatSearchParams = ({ property, selectedOptions }) => ({
  filter: { [property]: unwrapOptions(selectedOptions) }
});

const FilterMenu = ({ placeholder, property, options, searchParams, updateSearchParams }) => {
  const selectedOptions = searchParams.filter[property];

  return (
    <Select
      placeholder={placeholder}
      name="filter"
      value={selectedOptions}
      multi={true}
      options={wrapOptions(options)}
      onChange={(selectedOptions) => updateSearchParams(formatSearchParams({ property, selectedOptions }))} />
  );
};

FilterMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default FilterMenu;
