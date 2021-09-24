import { Dispatch } from 'redux';
import { ActionType, Action } from './types';

export const keyPressNum = (keyIn: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_NUM,
      payload: keyIn,
    })
  }
}

export const keyPressOpr = (keyIn: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_OPR,
      payload: keyIn,
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

export const keyPressAns = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_ANS,
    })
  }
}

export const keyPressDel = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_DEL,
    })
  }
}

export const keyPressFunc = (funcName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_FUNC,
      payload: funcName,
    })
  }
}


