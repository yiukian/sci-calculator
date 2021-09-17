
export interface calculatorObject {
  operand1: string
  operand2: string
  operator: string
  answer: string
}

export const calculate = (state: calculatorObject) => {
  let operand1: number
  let operand2: number

  operand1 = parseFloat(state.operand1)
  operand2 = parseFloat(state.operand2)

  switch (state.operator) {
    case '+':
      return (operand1 + operand2).toString();
    case '-':
      return (operand1 - operand2).toString();
    case '*':
      return (operand1 * operand2).toString();
    case '/':
      return (operand1 / operand2).toString();
    default:
      return '0';
  }
}

export const appendOperand = (operand: string, digit: string) => {
  let len = operand.length;

  operand.concat(digit);

  let value = parseFloat(operand);
  if(value !== 0)
  {
    operand = value.toString()
    operand.padEnd(len, '0');
  } else {
    operand = '0';
  }
  return operand;
}