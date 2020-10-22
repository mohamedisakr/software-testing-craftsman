const { isValidAmount, inValidRange } = require("../atm/transfer");

//
describe("test inValidRange function", () => {
  //
  test("amount < 0", async () => {
    const amount = -1;
    const actual = await inValidRange(amount);
    expect(actual).toBeFalsy();
  });

  //
  test("amount = 0", async () => {
    const amount = 0;
    const actual = await inValidRange(amount);
    expect(actual).toBeFalsy();
  });

  test("amount = 1", async () => {
    const amount = 1;
    const actual = await inValidRange(amount);
    expect(actual).toBeTruthy();
  });

  //
  test("amount = 4999", async () => {
    const amount = 4999;
    const actual = await inValidRange(amount);
    expect(actual).toBeTruthy();
  });

  //
  test("amount = 10000", async () => {
    const amount = 10000;
    const actual = await inValidRange(amount);
    expect(actual).toBeTruthy();
  });

  //
  test("amount > 10000", async () => {
    const amount = 10001;
    const actual = await inValidRange(amount);
    expect(actual).toBeFalsy();
  });

  //
  test("amount not valid => NaN", async () => {
    const amount = "lfjkadio*)(";
    await expect(inValidRange(amount)).rejects.toThrowError(
      "Please type number!"
    );
  });
});

// /*//
describe("test isValidAmount function", () => {
  //
  test("string characters => Number", async () => {
    const amount = "123";
    const expected = 123;
    const actual = await isValidAmount(amount);
    expect(actual).toBe(expected);
  });

  //
  test("string characters => NaN", async () => {
    const amount = "lfjkadio*)(";
    await expect(isValidAmount(amount)).rejects.toThrowError(
      "Please type number!"
    );
  });

  //
  test("null", async () => {
    const amount = null;
    await expect(isValidAmount(amount)).rejects.toThrowError(
      "Please type number!"
    );
  });

  //
  test("undefined", async () => {
    const amount = null;
    await expect(isValidAmount(amount)).rejects.toThrowError(
      "Please type number!"
    );
  });

  //
  test("empty string", async () => {
    const amount = "";
    await expect(isValidAmount(amount)).rejects.toThrowError(
      "Please type number!"
    );
  });
});
// */
