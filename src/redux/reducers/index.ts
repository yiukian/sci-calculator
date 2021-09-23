import { combineReducers } from 'redux'
import keysReducer from './keysReducer'


const rootReducers = combineReducers({
  keys: keysReducer,
});

export default rootReducers;

