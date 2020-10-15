import { combineReducers } from 'redux';
import actionReducer from './actionReducer';

const appReducer =  combineReducers({
  jobs: actionReducer
});
export default appReducer;