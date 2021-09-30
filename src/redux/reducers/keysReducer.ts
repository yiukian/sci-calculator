import { Action, ActionType } from "../actions";
import {
  appendOperand,
  calculate,
  calculateMathFunc,
  calculatorObject,
  getMathConstant,
} from "../logic";

const initialState: calculatorObject = {
  operand1: "0",
  operand2: "0",
  operator: "",
  answer: "0",
  whatToShow: "operand1",
};

const keysReducer = (state = initialState, action: Action) => {
  console.log(`keysReducer  ${action.type}  ` + action);
  let result: string;
  let { operand1, operand2, operator, answer, whatToShow } = state;

  switch (action.type) {
    case ActionType.KEYPRESS_OPR:
      operator = action.payload;
      switch (operator) {
        case "AC":
          return {
            ...initialState,
            answer: answer,
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
        case "+":
        case "-":
        case "*":
        case "/":
          result = calculate({ ...state });
          return {
            ...state,
            answer: result,
            operand1: result,
            operand2: "0",
            operator: operator,
            whatToShow: "operand1",
          };
        default:
          return { ...state };
      }

    case ActionType.KEYPRESS_NUM:
      let numKey: string;

      numKey = action.payload;
      if (operator === "" || operator === "=") {
        operand1 = appendOperand(operand1, numKey);
        whatToShow = "operand1";
      } else {
        operand2 = appendOperand(operand2, numKey);
        whatToShow = "operand2";
      }
      return {
        ...state,
        operand1: operand1,
        operand2: operand2,
        whatToShow: whatToShow,
      };

    case ActionType.KEYPRESS_FUNC:
      let mathFunc = action.payload;

      switch (mathFunc) {
        case "SIN":
        case "COS":
        case "TAN":
        case "LOG":
        case "LN":
          if (state.whatToShow === "operand1") {
            operand1 = calculateMathFunc(mathFunc, operand1);
          } else if (state.whatToShow === "operand2") {
            operand2 = calculateMathFunc(mathFunc, operand2);
          }
          break;
        case "PI":
        case "e":
        case "phi":
          if (
            operator === "+" ||
            operator === "-" ||
            operator === "*" ||
            operator === "/"
          ) {
            operand2 = getMathConstant(mathFunc);
            whatToShow = "operand2";
          } else {
            operand1 = getMathConstant(mathFunc);
            whatToShow = "operand1";
          }
          break;
        case "divBy1":
          break;
        case "POW":
          break;
        case "RPOW":
          break;
        default:
          break;
      }

      return {
        ...state,
        operand1: operand1,
        operand2: operand2,
        whatToShow: whatToShow,
      };

    default:
      return { ...state };
  }
};

export default keysReducer;
