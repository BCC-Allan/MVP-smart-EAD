// a + b = result
export class Operation {

  constructor(first, second, result, operator = '+') {
    this.first = first;
    this.second = second;
    this.operator = operator;
    this.operatorMap = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      'X': (a, b) => a * b,
    };
    this.result = result ?? this.getResult();
  }

  get isCorrect() {
    return this.getResult() === parseInt(this.result);
  }

  operationFunc(a, b) {
    return this.operatorMap[this.operator](a, b);
  }

  toString() {
    return `${this.first} ${this.operator} ${this.second} = ${this.result}`;
  }

  getResult() {
    return this.operationFunc(parseInt(this.first), parseInt(this.second));
  }
}
