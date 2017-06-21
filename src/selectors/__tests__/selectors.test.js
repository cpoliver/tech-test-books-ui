import { evolve, flip, merge } from 'ramda';

import {
  isLoadingSelector,
  booksSelector,
  totalBooksSelector,
  searchParamsSelector,
  pageParamsSelector,
  filterSelector,
  sortSelector,
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
    filter: {
      genre: ['adventure', 'horror', 'fantasy'],
      gender: ['male', 'non-binary']
    },
    sort: {
      property: 'title',
      direction: -1
    }
  }
};

const noSortNoFilter = { filter: { genre: [], gender: [] }, sort: {} };
const noSortNoFilterState = evolve({ search: flip(merge)(noSortNoFilter) })(state);

const noSort = { filter: { genre: ['sci-fi'], gender: [] }, sort: {} }
const noSortState = evolve({ search: flip(merge)(noSort) })(state);

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
    it('should return search state', () => {
      expect(searchParamsSelector(state)).toEqual(state.search);
    });
  });

  describe('pageParamsSelector', () => {
    it('should return page params', () => {
      expect(pageParamsSelector(state)).toEqual({ page: state.search.page, itemsPerPage: state.search.itemsPerPage });
    });
  });

  describe('filterSelector', () => {
    describe('when filtering is set', () => {
      it('should return correctly formed filter params', () => {
        expect(filterSelector(state)).toEqual({
          genre: { $in: ['adventure', 'horror', 'fantasy'] },
          gender:{ $in: ['male', 'non-binary'] }
        });
      });
    });

    describe('when filtering is not set', () => {
      it('should return correctly formed filter params', () => {
        expect(filterSelector(noSortNoFilterState)).toEqual({});
      });
    });
  });

  describe('sortSelector', () => {
    describe('when sorting is set', () => {
      it('should return correctly formed sort params', () => {
        expect(sortSelector(state)).toEqual({ title: -1 });
      });
    });

    describe('when sorting is not set', () => {
      it('should return correctly formed sort params', () => {
        expect(sortSelector(noSortNoFilterState)).toEqual({});
      });
    });
  });

  describe('queryStringSelector', () => {
    describe('when sorting and filtering is set', () => {
      it('should return a query string from the search state', () => {
        expect(queryStringSelector(state)).toEqual(
          'itemsPerPage=8&page=1&sort={"title":-1}&filter={"genre":{"$in":["adventure","horror","fantasy"]},"gender":{"$in":["male","non-binary"]}}'
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

    describe('when sorting is not set and filtering is set', () => {
      it('should return a query string from the search state', () => {
        expect(queryStringSelector(noSortState)).toEqual(
          'itemsPerPage=8&page=1&sort={}&filter={"genre":{"$in":["sci-fi"]}}'
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
