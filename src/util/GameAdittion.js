// a + b = result
export class GameAdittion {

  constructor(a, b, result) {
    this.a = a;
    this.b = b;
    this.result = result;
  }

  get isCorrect() {
    return (parseInt(this.a) + parseInt(this.b)) === parseInt(this.result);
  }

  toString() {
    return `${this.a} + ${this.b} = ${this.result}`;
  }
}
