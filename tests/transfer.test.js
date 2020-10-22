const { transferMoney } = require("../atm/transfer");
describe.only("test transfer function", () => {
  test("string characters input", () => {
    const amount = "lfjkadio*)(";
    // const expected = new Error("Please type number!");
    const actual = transferMoney(amount);
    expect(actual).toThrowError("Please type number!");
  });
});
