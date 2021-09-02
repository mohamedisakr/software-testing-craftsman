const Account = require("../account");

describe("Account class", () => {
  it("should initialize with balance = 0", () => {
    const account = new Account(0);
    expect(account.getBalance()).toEqual(0);
  });

  it.skip("should initialize the account class", () => {
    const account = new Account(0);
    expect(account).toHaveBeenCalledTimes(1);
  });
});
