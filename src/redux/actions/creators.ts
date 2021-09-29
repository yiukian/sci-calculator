import { AnyAction } from "redux";
import { ActionType, Action } from "./types";

export const keyPressNum = (keyIn: string): Action => {
  console.log(`keyPressNum  ${keyIn}`);
  return {
    type: ActionType.KEYPRESS_NUM,
    payload: keyIn,
  };
};

export const keyPressOpr = (keyIn: string): Action => {
  console.log(`keyPressOpr  ${keyIn}`);
  return {
    type: ActionType.KEYPRESS_OPR,
    payload: keyIn,
  };
};
/* 
export const keyPressAc = (): Action => {
  console.log("keyPressAc");
  return {
    type: ActionType.KEYPRESS_AC,
  };
};

export const keyPressAns = (): Action => {
  console.log("keyPressAns");
  return {
    type: ActionType.KEYPRESS_ANS,
  };
};

export const keyPressDel = (): Action => {
  console.log("keyPressDel");
  return {
    type: ActionType.KEYPRESS_DEL,
  };
};
 */
export const keyPressFunc = (funcName: string): AnyAction => {
  console.log(`keyPressFunc  ${funcName}`);
  return {
    type: ActionType.KEYPRESS_FUNC,
    payload: funcName,
  };
};
