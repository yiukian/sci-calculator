import { Dispatch } from 'redux';
import { ActionType, Action } from './types';

export const keyPressNum = (keyIn: string) => {
  console.log(`keyPressNum  ${keyIn}`)
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_NUM,
      payload: keyIn,
    })
  }
}

export const keyPressOpr = (keyIn: string) => {
  console.log(`keyPressOpr  ${keyIn}`)
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_OPR,
      payload: keyIn,
    })
  }
}

export const keyPressAc = () => {
  console.log('keyPressAc')
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_AC,
    })
  }
}

export const keyPressAns = () => {
  console.log('keyPressAns')
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_ANS,
    })
  }
}

export const keyPressDel = () => {
  console.log('keyPressDel')
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_DEL,
    })
  }
}

export const keyPressFunc = (funcName: string) => {
  console.log(`keyPressFunc  ${funcName}`)
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.KEYPRESS_FUNC,
      payload: funcName,
    })
  }
}


