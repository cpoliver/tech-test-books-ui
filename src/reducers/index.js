import { combineReducers } from 'redux';

import bookListReducer from './bookListReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  bookList: bookListReducer,
  search: searchReducer
});
