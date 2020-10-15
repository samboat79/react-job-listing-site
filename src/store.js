import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import appReducer from './reducers/index';

const middleware = [thunk];
const initialState = {};

const store = createStore(
  appReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;