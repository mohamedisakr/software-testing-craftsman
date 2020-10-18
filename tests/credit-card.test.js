const {
  removeCheckDigit,
  multiplyby2,
  addDigits,
  sumAll,
  verifyCheckDigit,
  isValidLength,
} = require("../credit-card");

// isValidLength 13, 15, or 16
// 4690358213754657
describe.only("test isValidLength function", () => {
  test("valid length 13", () => {
    const creditCard = "4690358213754";
    // const expected = true;
    const actual = isValidLength(creditCard);
    expect(actual).toBeTruthy(); //.toBe(expected);
  });

  test("valid length 15", () => {
    const creditCard = "469035821375465";
    // const expected = true;
    const actual = isValidLength(creditCard);
    expect(actual).toBeTruthy();
  });

  test("valid length 16", () => {
    const creditCard = "4690358213754657";
    // const expected = true;
    const actual = isValidLength(creditCard);
    expect(actual).toBeTruthy();
  });

  test("NOT valid length 12", () => {
    const creditCard = "469035821375";
    // const expected = false;
    const actual = isValidLength(creditCard);
    expect(actual).toBeFalsy();
  });

  test("NOT valid length 14", () => {
    const creditCard = "46903582137546";
    // const expected = false;
    const actual = isValidLength(creditCard);
    expect(actual).toBeFalsy();
  });

  test("NOT valid length 17", () => {
    const creditCard = "46903582137546570";
    // const expected = false;
    const actual = isValidLength(creditCard);
    expect(actual).toBeFalsy();
  });
});

// removeCheckDigit
describe("test removeCheckDigit function", () => {
  test("valid case", () => {
    const creditCard = 4690358213754657;
    const expected = 469035821375465;
    const actual = removeCheckDigit(creditCard);
    expect(actual).toBe(expected);
  });

  // geek for geek example 79927398713
  test("valid case", () => {
    const creditCard = 4690358213754657;
    const expected = 469035821375465;
    const actual = removeCheckDigit(creditCard);
    expect(actual).toBe(expected);
  });
});

// multiplyby2
describe("test multiplyby2 function", () => {
  test("valid case", () => {
    const num = 4;
    const expected = 8;
    const actual = multiplyby2(num);
    expect(actual).toBe(expected);
  });
});

// addDigits
describe("test addDigits function", () => {
  test("valid case", () => {
    const num = 123478914;
    const expected = 39;
    const actual = addDigits(num);
    expect(actual).toBe(expected);
  });
});

// sumAll
describe("test sumAll function", () => {
  test("valid case", () => {
    const num = 469035821375465;
    const expected = 64;
    const actual = sumAll(num);
    expect(actual).toBe(expected);
  });
});

// verifyCheckDigit
describe("test verifyCheckDigit function", () => {
  test("valid case", () => {
    const num = 469035821375465;
    const expected = 5;
    const actual = verifyCheckDigit(num);
    expect(actual).toBe(expected);
  });
});
