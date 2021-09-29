import { Action, ActionType } from "../actions";
import { appendOperand, calculatorObject } from "../logic";

const initialState: calculatorObject = {
  operand1: "0",
  operand2: "0",
  operator: "",
  answer: "0",
};

const keysReducer = (state = initialState, action: Action) => {
  console.log(`keysReducer  ${action.type}  ` + action);
  switch (action.type) {
    /*     case ActionType.KEYPRESS_ANS:
      let result: string;
      result = calculate({...state});
      return {
        operand1: result,
        operand2: '0',
        operator: '=',
        answer: result,
      } */
    case ActionType.KEYPRESS_OPR:
      return {
        ...state,
      };
    /*     case ActionType.KEYPRESS_AC:
      return {
        ...initialState
      } */
    case ActionType.KEYPRESS_NUM:
      let key: string;
      let newState = { ...state };

      key = action.payload;
      if (state.operator === "" || state.operator === "=") {
        newState.operand1 = appendOperand(state.operand1, key);
      } else {
        newState.operand2 = appendOperand(state.operand2, key);
      }
      return { ...newState };

    case ActionType.KEYPRESS_FUNC:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

export default keysReducer;
