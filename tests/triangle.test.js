const { solve } = require("../triangle/triangle");
const {
  scalene,
  equilateral,
  isosceles,
  right,
  notATriangle,
} = require("../triangle/data");

describe("14 test cases The Art of Software Testing 2011 pp. 2", () => {
  //
  test("1 valid scalene triangle", () => {
    expect(solve(3, 4, 5)).toBe(scalene);
  });

  //
  test("2 valid equilateral triangle", () => {
    expect(solve(3, 3, 3)).toBe(equilateral);
  });

  //
  test("3 valid isosceles triangle", () => {
    expect(solve(3, 4, 4)).toBe(isosceles);
  });

  //
  test("4.a valid isosceles triangles, tried all 3 permutation of 2 equal sides ", () => {
    expect(solve(3, 3, 4)).toBe(isosceles);
  });

  //
  test("4.b valid isosceles triangles, tried all 3 permutation of 2 equal sides ", () => {
    expect(solve(3, 4, 3)).toBe(isosceles);
  });

  //
  test("4.c valid isosceles triangles, tried all 3 permutation of 2 equal sides ", () => {
    expect(solve(4, 3, 3)).toBe(isosceles);
  });

  //
  test("5 one side has a zero value", () => {
    expect(solve(0, 3, 3)).toBe(notATriangle);
  });

  //
  test("6 one side has a negative value", () => {
    expect(solve(-1, 2, 2)).toBe(notATriangle);
  });

  //
  test("7 the sum of 2 of the sides is equal to the third", () => {
    expect(solve(1, 2, 3)).toBe(notATriangle);
  });

  //
  test("8.a the sum of two of the numbers is equal to the third", () => {
    expect(solve(1, 2, 3)).toBe(notATriangle);
  });

  //
  test("8.b the sum of two of the numbers is equal to the third", () => {
    expect(solve(1, 3, 2)).toBe(notATriangle);
  });

  //
  test("8.c the sum of two of the numbers is equal to the third", () => {
    expect(solve(3, 1, 2)).toBe(notATriangle);
  });

  //
  test("9 the sum of two of the numbers is less than the third", () => {
    expect(solve(12, 15, 30)).toBe(notATriangle);
  });

  //
  test("10.a the sum of two of the numbers is less than the third", () => {
    expect(solve(30, 12, 15)).toBe(notATriangle);
  });

  //
  test("10.b the sum of two of the numbers is less than the third", () => {
    expect(solve(30, 15, 12)).toBe(notATriangle);
  });

  //
  test("10.c the sum of two of the numbers is less than the third", () => {
    expect(solve(15, 30, 12)).toBe(notATriangle);
  });

  //
  test("11 all sides are zero", () => {
    expect(solve(0, 0, 0)).toBe(notATriangle);
  });

  //
  test("12 noninteger values", () => {
    expect(solve(2.5, 3.5, 5.5)).toBe(scalene);
  });

  //
  test("13 the wrong number of values (arguments) 2 rather than 3 integers", () => {
    expect(solve(3, 4)).toBe(notATriangle);
  });

  //
  test("14 the sum of two of the numbers is equal to the third", () => {
    expect(solve(1, 2, 3)).toBe(notATriangle);
  });
});
