"use strict";

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    return this.num1 + this.num2;
  }

  mul() {
    return this.num1 * this.num2;
  }
}
const calculator = new Calculator(
  +prompt("write first num"),
  +prompt("write second num")
);
console.log(`sum: ${calculator.sum()}`);
console.log(`mul: ${calculator.mul()}`);
