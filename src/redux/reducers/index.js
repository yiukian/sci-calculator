import { combineReducers } from 'redux'
import keysReducer from './keysReducer'

const reducers = combineReducers({
  keys: keysReducer
});

export default reducers;

