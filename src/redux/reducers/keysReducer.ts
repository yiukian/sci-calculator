import { Action, ActionType } from "../actions";
import { appendOperand, calculate, calculatorObject } from "../logic";

const initialState: calculatorObject = {
  operand1: "0",
  operand2: "0",
  operator: "",
  answer: "0",
  whatToShow: "operand1",
};

const keysReducer = (state = initialState, action: Action) => {
  console.log(`keysReducer  ${action.type}  ` + action);
  let answer: string;

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
      let operator = action.payload;
      switch (operator) {
        case "AC":
          return {
            ...initialState,
            answer: state.answer,
          };
        case "DEL":
          // TODO:  Not yet handle
          return {
            ...state,
          };
        case "M":
          // TODO: Not yet handle
          return {
            ...state,
          };
        case "=":
          answer = calculate({ ...state });
          return {
            ...state,
            answer: answer,
            operand1: answer,
            operand2: "0",
            operator: operator,
            whatToShow: "operand1",
          };
        case "+":
        case "-":
        case "*":
        case "/":
          answer = calculate({ ...state });
          return {
            ...state,
            operand1: answer,
            operand2: "0",
            answer: answer,
            operator: operator,
            whatToShow: "operand1",
          };
        default:
          return { ...state };
      }

    case ActionType.KEYPRESS_NUM:
      let key: string;
      let newState = { ...state };

      key = action.payload;
      if (state.operator === "" || state.operator === "=") {
        newState.operand1 = appendOperand(state.operand1, key);
        newState.whatToShow = "operand1";
      } else {
        newState.operand2 = appendOperand(state.operand2, key);
        newState.whatToShow = "operand2";
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
