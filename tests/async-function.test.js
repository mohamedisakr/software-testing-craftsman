const { add } = require("../js/async-function");
const { gcd } = require("../number-theory");

describe("test async function", () => {
  test("add function async", async () => {
    const expected = 28;
    const actual = await add(21, 7);
    expect(actual).toBe(expected);
  });
});

describe("do statement coverage", () => {
  test("x > y", async () => {
    const expected = 7;
    const actual = await gcd(21, 7);
    expect(actual).toBe(expected);
  });

  test("x < y", async () => {
    const expected = 7;
    const actual = await gcd(7, 21);
    expect(actual).toBe(expected);
  });

  test("x = y", async () => {
    const expected = 7;
    const actual = await gcd(7, 7);
    expect(actual).toBe(expected);
  });

  test("x != y & gcd = 1", async () => {
    const expected = 1;
    const actual = await gcd(12, 7);
    expect(actual).toBe(expected);
  });
});
