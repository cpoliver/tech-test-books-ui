import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { attemptToFetchBooks } from './actions';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(attemptToFetchBooks({ page: 1, itemsPerPage: 10 }));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
