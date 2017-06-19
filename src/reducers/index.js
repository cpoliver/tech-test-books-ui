import { combineReducers } from 'redux';

import bookListReducer from './bookListReducer';

export default combineReducers({
  bookList: bookListReducer
});
