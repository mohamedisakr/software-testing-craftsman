const { getMax } = require("../white-box/statement-coverage");

describe("do statement coverage", () => {
  test("x > y", () => {
    const expected = 21;
    const actual = getMax(21, 7);
    expect(actual).toBe(expected);
  });

  test("x < y", () => {
    const expected = 21;
    const actual = getMax(7, 21);
    expect(actual).toBe(expected);
  });

  test("x = y", () => {
    const expected = 7;
    const actual = getMax(7, 7);
    expect(actual).toBe(expected);
  });

  test("x != y", () => {
    const expected = 12;
    const actual = getMax(12, 7);
    expect(actual).toBe(expected);
  });
});
