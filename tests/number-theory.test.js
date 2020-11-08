const {
  gcd,
  factorial,
  fact2,
  permutation,
  combination,
} = require("../number-theory");

//
describe("factorial", () => {
  //
  test("empty", () => {
    const expected = 1;
    const actual = factorial();
    expect(actual).toBe(expected);
  });

  //
  test("0", () => {
    const expected = 1;
    const actual = factorial(0);
    expect(actual).toBe(expected);
  });

  //
  test("-1", () => {
    const expected = 1;
    const actual = factorial(-1);
    expect(actual).toBe(expected);
  });

  //
  test("-1000", () => {
    const expected = 1;
    const actual = factorial(-1000);
    expect(actual).toBe(expected);
  });

  //
  test("decimal positive", () => {
    const expected = 1;
    const actual = factorial(4.2324);
    expect(actual).toBe(expected);
  });

  //
  test("decimal negative", () => {
    const expected = 1;
    const actual = factorial(-4.2324);
    expect(actual).toBe(expected);
  });
});

/*
describe("GCD statement coverage", () => {
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
*/
