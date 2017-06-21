import { any, assoc, equals, flip, has, map, mergeDeepRight, when } from 'ramda';

import { UPDATED_SEARCH_PARAMS_RECEIVED } from '../actions/types';

const initState = {
  itemsPerPage: 8,
  page: 1,
  filter: {
    genre: [],
    'author.gender': []
  },
  sort: {
    property: 'title',
    direction: 1
  }
};

const resetPage = assoc('page', 1);
const hasProps = (props) => (obj) => any(equals(true), map(flip(has)(obj), props));

const updateSearchParams = (state, payload) => {
  const newParams = when(hasProps(['filter', 'sort', 'itemsPerPage']), resetPage)(payload);
  return mergeDeepRight(state, newParams);
};

const searchReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [UPDATED_SEARCH_PARAMS_RECEIVED]: updateSearchParams(state, payload)
  };

  return actions[type] || state;
};

export default searchReducer;
