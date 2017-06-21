import { evolve, flip, merge } from 'ramda';

import {
  isLoadingSelector,
  booksSelector,
  totalBooksSelector,
  searchParamsSelector,
  queryStringSelector,
  totalPagesSelector
} from '../';

const state = {
  bookList: {
    isLoading: false,
    total: 81,
    books: [{
      _id: 'book1'
    }, {
      _id: 'book2'
    }],
    error: {}
  },
  search: {
    itemsPerPage: 8,
    page: 1,
    filters: ['adventure', 'horror', 'fantasy'],
    sort: { title: 1 }
  }
};

const noSortNoFilterState = evolve({ search: flip(merge)({ filters: [], sort: {} }) })(state);

describe('selectors', () => {
  describe('isLoadingSelector', () => {
    it('should return the loading state', () => {
      expect(isLoadingSelector(state)).toEqual(false);
    });
  });

  describe('booksSelector', () => {
    it('should return books', () => {
      expect(booksSelector(state)).toEqual(state.bookList.books);
    });
  });

  describe('totalBooksSelector', () => {
    it('should return the total book count', () => {
      expect(totalBooksSelector(state)).toEqual(81);
    });
  });

  describe('searchParamsSelector', () => {
    it('should return search state from the state', () => {
      expect(searchParamsSelector(state)).toEqual(state.search);
    });
  });

  describe('queryStringSelector', () => {
    describe('when sorting and filtering is set', () => {
      it('should return a query string from the search state', () => {
        expect(queryStringSelector(state)).toEqual(
          'itemsPerPage=8&page=1&sort={"title":1}&filter={"genre":{"$in":["adventure","horror","fantasy"]}}'
        );
      });
    });

    describe('when sorting and filtering is not set', () => {
      it('should return a query string from the search state', () => {
        expect(queryStringSelector(noSortNoFilterState)).toEqual(
          'itemsPerPage=8&page=1&sort={}&filter={}'
        );
      });
    });
  });

  describe('totalPagesSelector', () => {
    it('should return the total page count', () => {
      expect(totalPagesSelector(state)).toEqual(11);
    });
  });
});
