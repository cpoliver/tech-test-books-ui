import { assoc, dissoc } from 'ramda';

import reducer from '../searchReducer';
import { UPDATED_SEARCH_PARAMS_RECEIVED } from '../../actions/types';

const modifiedState = {
  itemsPerPage: 8,
  page: 1,
  filter: {
    genre: [],
    'author.gender': ['female']
  },
  sort: {
    property:'title',
    direction: 1
  }
};

const page3State = assoc('page', 3, modifiedState);

describe('searchReducer', () => {
  it('has the correct initial state', () => {
    const state = reducer();

    expect(state).toEqual({
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
    });
  });

  it('does not alter state when an unrelated action is dispatched', () => {
    const state = reducer(modifiedState, { type: 'X' });

    expect(state).toEqual(modifiedState);
  });

  describe('when updated search params are received', () => {
    const newSearchParams = {
      filter: {
        genre: ['adventure']
      },
      sort: {
        property:'author.surname'
      }
    };

    it('should merge the new params to the state without overwriting the old ones', () => {
      const state = reducer(modifiedState, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload: newSearchParams });

      expect(state).toEqual({
        itemsPerPage: 8,
        page: 1,
        filter: {
          genre: ['adventure'],
          'author.gender': ['female']
        },
        sort: {
          property:'author.surname',
          direction: 1
        }
      });
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
