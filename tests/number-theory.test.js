const { gcd } = require("../number-theory");
describe("do statement coverage", () => {
  test("x > y", () => {
    const expected = 7;
    const actual = gcd(21, 7);
    expect(actual).toBe(expected);
  });

  test("x < y", () => {
    const expected = 7;
    const actual = gcd(7, 21);
    expect(actual).toBe(expected);
  });

  test("x = y", () => {
    const expected = 7;
    const actual = gcd(7, 7);
    expect(actual).toBe(expected);
  });

  test("x != y & gcd = 1", () => {
    const expected = 1;
    const actual = gcd(12, 7);
    expect(actual).toBe(expected);
  });
});
