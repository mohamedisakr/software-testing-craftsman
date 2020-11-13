const {
  computeInterestRate,
} = require("../Rajib-Mall/assigment-2/interest-rate");

//

describe("3 test cases are needed for weak equivalence class testing", () => {
  //
  test("(1) 1 ≤ month < 12, 1,000 ≤ amount < 100,000", () => {
    const month = 2;
    const amount = 2000;
    const expected = 120;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(2) month 12 ≤ month < 36 , 100,000 ≤ amount < 10,000,000", () => {
    const month = 24;
    const amount = 290000;
    const expected = 23200;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(3) month 36 ≤ month< 120 , 1,000 ≤ amount < 100,000", () => {
    const month = 24;
    const amount = 70000;
    const expected = 5600;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });
});

// ****************************************************

//
describe("6 test cases are needed for strong equivalence class testing", () => {
  //
  test("(1) 1 ≤ month < 12, 1,000 ≤ amount < 100,000", () => {
    const month = 2;
    const amount = 2000;
    const expected = 120;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(2) 1 ≤ month < 12, 100,000 ≤ amount < 10,000,000", () => {
    const month = 2;
    const amount = 200000;
    const expected = 14000;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(3) month 12 ≤ month < 36 , 1,000 ≤ amount < 100,000", () => {
    const month = 24;
    const amount = 90000;
    const expected = 6300;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(4) month 12 ≤ month < 36 , 100,000 ≤ amount < 10,000,000", () => {
    const month = 24;
    const amount = 290000;
    const expected = 23200;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(5) month 36 ≤ month< 120 , 1,000 ≤ amount < 100,000", () => {
    const month = 24;
    const amount = 70000;
    const expected = 5600;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(6) month 36 ≤ month< 120 , 100,000 ≤ amount < 10,000,000", () => {
    const month = 24;
    const amount = 1200000;
    const expected = 108000;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });
});
