import { calculatorObject } from './logic'

export * as actionCreators from './actions'
export * from './reducers'
export * from './store'


export type AppState = {
  keys: calculatorObject;
}