export interface calculatorObject {
  operand1: string;
  operand2: string;
  operator: string;
  answer: string;
}

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
      return "0";
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
