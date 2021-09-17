export enum ActionType {
  KEYPRESS_NUM = "number",
  KEYPRESS_ANS = "answer",
  KEYPRESS_AC = "allclear",
  KEYPRESS_DEL = "delete",
  KEYPRESS_MINUS = "minus",
  KEYPRESS_COS = "cos",
}

interface KeyPressNumAction {
  type: ActionType.KEYPRESS_NUM,
  payload: string,
}

interface KeyPressAnsAction {
  type: ActionType.KEYPRESS_ANS,
}

interface KeyPressAcAction {
  type: ActionType.KEYPRESS_AC,
}

interface KeyPressDelAction {
  type: ActionType.KEYPRESS_DEL,
}

export type Action = (
  KeyPressNumAction | 
  KeyPressAnsAction | 
  KeyPressAcAction | 
  KeyPressDelAction
)