const {
  computeInterestRate,
  monthErrorMessage,
  amountErrorMessage,
} = require("../Rajib-Mall/assigment-2/interest-rate");

// Strong robust equivalence class test cases
// We obtain test cases from each element of the Cartesian product of all the
// equivalence classes, both valid and invalid
// 2 valid + 2 invalid for amount = 4
// 3 valid + 2 invalid for month  = 5
// 4 * 5 = 20
describe("20 test cases for Strong Robust Equivalence Class class test cases", () => {
  //
  test("(1) (valid test case) 1 ≤ month < 12, 1,000 ≤ amount < 100,000", () => {
    const month = 2;
    const amount = 2000;
    const expected = 120;
    const { rate } = computeInterestRate(amount, month);
    expect(rate).toBe(expected);
  });

  //
  test("(2) (valid test case)  1 ≤ month < 12, 100,000 ≤ amount < 10,000,000", () => {
    const month = 8;
    const amount = 280000;
    const expected = 19600;
    const { rate } = computeInterestRate(amount, month);
    expect(rate).toBe(expected);
  });

  //
  test("(3) (valid test case)  12 ≤ month < 36, 1,000 ≤ amount < 100,000", () => {
    const month = 34;
    const amount = 8000;
    const expected = 560;
    const { rate } = computeInterestRate(amount, month);
    expect(rate).toBe(expected);
  });

  //
  test("(4) (valid test case)  12 ≤ month < 36, 100,000 ≤ amount < 10,000,000", () => {
    const month = 24;
    const amount = 290000;
    const expected = 23200;
    const { rate } = computeInterestRate(amount, month);
    expect(rate).toBe(expected);
  });

  //
  test("(5) (valid test case) month 36 ≤ month < 120 , 1,000 ≤ amount < 100,000", () => {
    const month = 100;
    const amount = 40000;
    const expected = 3200;
    const { rate } = computeInterestRate(amount, month);
    expect(rate).toBe(expected);
  });

  //
  test("(6) (valid test case) month 36 ≤ month < 120, 100,000 ≤ amount < 10,000,000", () => {
    const month = 70;
    const amount = 5050000;
    const expected = 454500;
    const { rate } = computeInterestRate(amount, month);
    expect(rate).toBe(expected);
  });

  //
  test("(7) (invalid month && amount) month < 1, amount < 1,000", () => {
    const month = -2;
    const amount = 20;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(8) (invalid month) month < 1, 1,000 ≤ amount < 100,000", () => {
    const month = -20;
    const amount = 40000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(monthErrorMessage);
    }
  });

  //
  test("(9) (invalid month) month < 1, 100,000 ≤ amount < 10,000,000", () => {
    const month = -4;
    const amount = 400000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(monthErrorMessage);
    }
  });

  //
  test("(10) (invalid month && amount) month < 1, amount > 10,000,000", () => {
    const month = -8;
    const amount = 10000000000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(11) (invalid amount) 1 ≤ month < 12, amount < 1,000", () => {
    const month = 7;
    const amount = 40;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(12) (invalid amount) 1 ≤ month < 12, amount > 10,000,000", () => {
    const month = 7;
    const amount = 1000000000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(13) (invalid amount) 12 ≤ month < 36, amount < 1000", () => {
    const month = 30;
    const amount = 100;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(14) (invalid amount) 12 ≤ month < 36, amount > 10,000,000", () => {
    const month = 17;
    const amount = 1000000000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(15) (invalid amount) 36 ≤ month < 120, amount < 1000", () => {
    const month = 100;
    const amount = 10;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(16) (invalid amount)  36 ≤ month < 120, amount > 10,000,000", () => {
    const month = 117;
    const amount = 1000000000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(17) (invalid month && amount) month > 120, amount < 1,000", () => {
    const month = 200;
    const amount = 20;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(18) (invalid month)  month > 120, 1,000 ≤ amount < 100,000", () => {
    const month = 170;
    const amount = 80000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(monthErrorMessage);
    }
  });

  //
  test("(19) (invalid month) month > 120, 100,000 ≤ amount < 10,000,000", () => {
    const month = 122;
    const amount = 300000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(monthErrorMessage);
    }
  });

  //
  test("(20) (invalid month && amount) month > 120, amount > 10,000,000", () => {
    const month = 200;
    const amount = 2000000000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });
});

// ****************************************************

//#region
/*
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

// *************************************************

//
describe("7 test cases for revised weak robust equivalence class test cases", () => {
  //
  test("(1) valid 1 ≤ month < 12, 1,000 ≤ amount < 100,000", () => {
    const month = 2;
    const amount = 2000;
    const expected = 120;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(2) valid month 12 ≤ month < 36, 100,000 ≤ amount < 10,000,000", () => {
    const month = 24;
    const amount = 290000;
    const expected = 23200;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(3) valid month 36 ≤ month< 120 , 1,000 ≤ amount < 100,000", () => {
    const month = 24;
    const amount = 70000;
    const expected = 5600;
    const actual = computeInterestRate(amount, month);
    expect(actual).toBe(expected);
  });

  //
  test("(4) (invalid month) month < 1, 1,000 ≤ amount < 100,000", () => {
    const month = 0;
    const amount = 40000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(monthErrorMessage);
    }
  });

  //
  test("(5) (invalid amount) 1 ≤ month < 12, amount > 100,000,000", () => {
    const month = 7;
    const amount = 100000000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(6) (invalid amount) 12 ≤ month < 36, amount < 1000", () => {
    const month = 30;
    const amount = 100;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(amountErrorMessage);
    }
  });

  //
  test("(7) (invalid month) month > 120, 100,000 ≤ amount < 10,000,000", () => {
    const month = 122;
    const amount = 300000;
    try {
      expect(computeInterestRate(amount, month)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(monthErrorMessage);
    }
  });
});

// ****************************************************
*/
//#endregion
