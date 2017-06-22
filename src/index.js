import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { rootSaga } from './sagas'

import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.min.css';
import './index.css';

const sagas = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagas));

sagas.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
