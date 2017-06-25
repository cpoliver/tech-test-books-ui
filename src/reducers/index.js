import { combineReducers } from 'redux';

import adminReducer from './adminReducer';
import bookListReducer from './bookListReducer';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  admin: adminReducer,
  bookList: bookListReducer,
  error: errorReducer,
  search: searchReducer
});
