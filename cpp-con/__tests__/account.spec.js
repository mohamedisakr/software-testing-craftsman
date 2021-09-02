const Account = require("../account");

describe("Account class", () => {
  it("A new account should has an empty balance", () => {
    const account = new Account(0);
    expect(account.getBalance()).toEqual(0);
  });

  it("An empty account can be deposit to", () => {
    const amount = 100;
    const account = new Account(0);
    account.deposit(amount);
    expect(account.getBalance()).toEqual(amount);
  });

  it("An empty account can be withdraw from with negative balance", () => {
    const amount = 100;
    const actual = -110;
    const account = new Account(0);
    account.withdraw(amount);

    expect(account.getBalance()).toEqual(actual);
  });
});

// it("should initialize with balance = 0", () => {
//   const account = new Account(0);
//   expect(account.getBalance()).toEqual(0);
// });

// it.skip("should initialize the account class", () => {
//   const account = new Account(0);
//   expect(account).toHaveBeenCalledTimes(1);
// });
