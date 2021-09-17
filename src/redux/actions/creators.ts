import { Dispatch } from 'redux';
import { ActionType, Action } from './types';

export const keyPressNum = (key: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_NUM,
      payload: key,
    })
  }
}

export const keyPressAc = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_AC,
    })
  }
}

export const keyPressAnsAction = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_ANS,
    })
  }
}

export const keyPressDelAction = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_DEL,
    })
  }
}

