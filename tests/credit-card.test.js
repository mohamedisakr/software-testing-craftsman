const {
  removeCheckDigit,
  multiplyby2,
  addDigits,
  sumAll,
  verifyCheckDigit,
} = require("../credit-card");

// removeCheckDigit
describe("test removeCheckDigit function", () => {
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
