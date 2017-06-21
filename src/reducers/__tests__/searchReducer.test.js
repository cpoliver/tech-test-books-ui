import { assoc, dissoc } from 'ramda';

import reducer from '../searchReducer';
import { UPDATED_SEARCH_PARAMS_RECEIVED } from '../../actions/types';

const initState = {
  itemsPerPage: 8,
  page: 1,
  filters: [],
  sort: {}
};

const page3State = assoc('page', 3, initState);

describe('searchReducer', () => {
  it('has the correct initial state', () => {
    const state = reducer();

    expect(state).toEqual(initState);
  });

  it('does not alter state when an unrelated action is dispatched', () => {
    const state = reducer(initState, { type: 'X' });

    expect(state).toEqual(initState);
  });

  describe('when updated search params are received', () => {
    const newSearchParams = {
      itemsPerPage: 8,
      page: 1,
      filters: [ 'changed' ],
      sort: { changed: true }
    };

    it('should add the new params to the state', () => {
      const state = reducer(initState, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload: newSearchParams });

      expect(state).toEqual(newSearchParams);
    });

    it('should reset page to 1, if the filters has changed', () => {
      const payload = dissoc('sort', newSearchParams);
      const state = reducer(page3State, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });

      expect(state.page).toEqual(1);
    });

    it('should reset page to 1, if the sort has changed', () => {
      const payload = dissoc('filters', newSearchParams);
      const state = reducer(page3State, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });

      expect(state.page).toEqual(1);
    });

    it('should reset page to 1, if the items per page has changed', () => {
      const payload = { itemsPerPage: 16 };
      const state = reducer(page3State, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });

      expect(state.page).toEqual(1);
    });

    it('should update the page, if only the page has changed', () => {
      const payload = { page: 42 };
      const state = reducer(page3State, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });

      expect(state.page).toEqual(42);
    });
  });
});
