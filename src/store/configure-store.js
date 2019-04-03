
import { applyMiddleware, createStore, compose} from 'redux'
import 'redux-devtools-extension'
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promise-middleware';
import createLogger from './logger';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const store = compose(
      _getMiddleware(),
      ..._getEnhancers()
  )(createStore)(rootReducer, initialState);

  _enableHotLoader(store);
  return store;
}

function _getMiddleware() {
  let middleware = [
    promiseMiddleware,
    thunk,
  ];

  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger];
  }

  return applyMiddleware(...middleware);
}

function _getEnhancers() {
  let enhancers = [];

  if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers = [...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__() ];
  }

  return enhancers;
}

function _enableHotLoader(store) {
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
}

export default configureStore;