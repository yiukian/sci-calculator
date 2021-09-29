export enum ActionType {
  KEYPRESS_NUM = "number",
  KEYPRESS_OPR = "operator",
  KEYPRESS_FUNC = "mathFunc",
  //  KEYPRESS_ANS = "answer",
  //  KEYPRESS_AC = "allclear",
  //  KEYPRESS_DEL = "delete",
  //  KEYPRESS_MINUS = "minus",
  //  KEYPRESS_COS = "cos",
}

interface KeyPressNumAction {
  type: ActionType.KEYPRESS_NUM;
  payload: string;
}

interface KeyPressOprAction {
  type: ActionType.KEYPRESS_OPR;
  payload: string;
}

/* 
interface KeyPressAnsAction {
  type: ActionType.KEYPRESS_ANS,
}

interface KeyPressAcAction {
  type: ActionType.KEYPRESS_AC,
}

interface KeyPressDelAction {
  type: ActionType.KEYPRESS_DEL,
}
 */
interface KeyPressFuncAction {
  type: ActionType.KEYPRESS_FUNC;
  payload: string;
}

export type Action = KeyPressNumAction | KeyPressOprAction | KeyPressFuncAction;
