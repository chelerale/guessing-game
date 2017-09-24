class GuessingGame {
    constructor() {}

    setRange(min, max) {
    this.a = min
    this.b = max
    }

    guess() {
      return Math.ceil((this.a + this.b)/2)
    }

    lower() {
      this.b = Math.ceil((this.a + this.b)/2)
    }

    greater() {
      this.a = Math.ceil((this.a + this.b)/2)
    }
}

module.exports = GuessingGame;
