export interface calculatorObject {
  operand1: string;
  operand2: string;
  operator: string;
  answer: string;
  whatToShow: string;
}

const mathFuncCall: { [mathFunc: string]: Function } = {
  SIN: (operand: string) => Math.sin((parseFloat(operand) * Math.PI) / 180),
  COS: (operand: string) => Math.cos((parseFloat(operand) * Math.PI) / 180),
  TAN: (operand: string) => Math.tan((parseFloat(operand) * Math.PI) / 180),
  LOG: (operand: string) => Math.log10(parseFloat(operand)),
  LN: (operand: string) => Math.log(parseFloat(operand)),
};

const getMathConstCall: { [constName: string]: string } = {
  PI: Math.PI.toFixed(15),
  e: Math.E.toFixed(15),
  phi: "1.618033988749894" /* Golden ratio */,
};

/***
 * Calculate mathematic functions
 * return answer: string
 * Note: if mathFunc is not found, return operand
 */
export const calculateMathFunc = (
  mathFunc: string,
  operand: string
): string => {
  let fn = mathFuncCall[mathFunc];

  if (typeof fn === "function") {
    return fn(operand).toFixed(15); // 15 dp
  }
  return operand;
};

/***
 * Retrieve mathematic constant
 * return answer in string
 * Note: if constName is not found, return "0"
 */
export const getMathConstant = (constName: string): string => {
  let result = getMathConstCall[constName];

  if (result !== null && result !== "") {
    return result;
  }
  return "0";
};

/***
 * Do calculation (+ - * /)
 * input calculatorObject
 * return answer in string
 */
export const calculate = (state: calculatorObject) => {
  let operand1: number;
  let operand2: number;

  operand1 = parseFloat(state.operand1);
  operand2 = parseFloat(state.operand2);

  switch (state.operator) {
    case "+":
      return (operand1 + operand2).toString();
    case "-":
      return (operand1 - operand2).toString();
    case "*":
      return (operand1 * operand2).toString();
    case "/":
      return (operand1 / operand2).toString();
    default:
      return state.operand1;
  }
};

// Limitation:  14 dp accuracy
//              16 Digits calculator
export const appendOperand = (operand: string, digit: string) => {
  let dotpos = operand.indexOf(".");

  if ((digit === "." && dotpos < 0) || !isNaN(Number(digit))) {
    let len = operand.length;
    let dpLen = 0;

    // Handle first key input when operand is 0
    //    if (len === 1 && operand[0] !== "0" && digit !== "0") {
    if (len === 1 && operand[0] === "0") {
    } else {
      len = len + 1;
    }

    operand = operand.concat(digit);

    if (digit !== ".") {
      // floating points in JavaScript follows the IEEE-754 format
      // Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
      // The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate

      let value = parseFloat(operand);
      if (value !== 0) {
        // Handle Value > 0
        if (dotpos >= 0) {
          // toPrecision() can't handle 0.0000001  ==> become 1.000000e-6
          //operand = value.toPrecision(len);
          // operand = operand.substring(0, len);
          dpLen = len - dotpos - 1;
          operand = value.toFixed(dpLen);
        } else {
          // No decimal point, handle integer
          operand = value.toString();
          operand = operand.padEnd(len, "0");
        }
      } else if (dotpos >= 0) {
        // Handle Value === 0 with decimal point found
        operand = "0.";
        operand = operand.padEnd(len, "0");
      } else {
        // Handle Value === 0 without decimal point
        operand = "0";
      }
    }
  }
  return operand;
};
