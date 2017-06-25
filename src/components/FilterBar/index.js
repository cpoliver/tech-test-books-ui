import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import FilterMenu from '../FilterMenu';
import ItemsPerPageMenu from '../ItemsPerPageMenu';
import SortMenu from '../SortMenu';
import { searchParamsType } from '../../lib/types';
import { ITEMS_PER_PAGE_OPTIONS, GENDERS, GENRES, SORTABLE_PROPERTIES } from '../../lib/constants';

const FilterBar = ({ searchParams, updateSearchParams }) => (
  <Row className="filter-bar">
    <Col xs={12} md={6}>
      <FilterMenu
        placeholder="Filter Genres"
        property="genre"
        options={GENRES}
        searchParams={searchParams}
        updateSearchParams={updateSearchParams} />
    </Col>
    <Col xs={12} md={3}>
      <FilterMenu
        placeholder="Filter Author Genders"
        property="author.gender"
        options={GENDERS}
        searchParams={searchParams}
        updateSearchParams={updateSearchParams} />
    </Col>
    <Col xs={8} md={2}>
      <SortMenu
        options={SORTABLE_PROPERTIES}
        searchParams={searchParams}
        updateSearchParams={updateSearchParams} />
    </Col>
    <Col xs={4} md={1}>
      <ItemsPerPageMenu
        options={ITEMS_PER_PAGE_OPTIONS}
        searchParams={searchParams}
        updateSearchParams={updateSearchParams} />
    </Col>
  </Row>
);

FilterBar.propTypes = {
  searchParams: searchParamsType,
  updateSearchParams: PropTypes.func.isRequired
};

export default FilterBar;
