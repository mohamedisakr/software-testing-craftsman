class Account {
  #balance = 0;

  constructor(initialAmount) {
    this.#balance = initialAmount;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
    if (this.#balance < 0) {
      this.#balance -= 10; // penalty if overdrawn
    }
  }
}

module.exports = Account;
