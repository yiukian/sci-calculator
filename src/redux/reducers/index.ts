import { combineReducers } from 'redux'
import { AppState } from '..';
import keysReducer from './keysReducer'


const rootReducers = combineReducers<AppState>({
  keys: keysReducer,
});

export default rootReducers;
export type State = ReturnType<typeof rootReducers>

