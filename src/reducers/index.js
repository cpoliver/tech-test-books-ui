import { combineReducers } from 'redux';

import adminReducer from './adminReducer';
import bookListReducer from './bookListReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  admin: adminReducer,
  bookList: bookListReducer,
  search: searchReducer
});
