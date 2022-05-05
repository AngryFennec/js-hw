module.exports = class Account {
  constructor(name) {
    this.name = name;
    this.sum = 0;
  }

  credit(sum) {
    this.sum = sum;
  }

  describe() {
    return `owner: ${this.name}, balance: ${this.sum}`;
  }
}

// аналог export default const function bar из браузерного js
