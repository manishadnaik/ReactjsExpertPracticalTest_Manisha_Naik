import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import { reduxSagaMiddleware, initSagas } from './sagas';
import rootReducer from './rootReducer';

function configureStore(initialState = {}) {
  const reduxThunkMiddleware = thunk;
  const reduxRouterMiddleware = routerMiddleware();
  const enhancers = compose(
    typeof window !== 'undefined' && window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  );
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = enhancers(
    applyMiddleware(
      //   reduxSagaMiddleware,
      reduxThunkMiddleware,
      reduxRouterMiddleware
    )
  );
  const store = createStore(rootReducer, initialState, middleware);
  //   initSagas();

  return store;
}
export default configureStore();
