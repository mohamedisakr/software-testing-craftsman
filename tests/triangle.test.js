const { solve } = require("../triangle/triangle");
const {
  scalene,
  right,
  scaleneAndRight,
  equilateral,
  isosceles,
  notATriangle,
  errorMessage,
} = require("../triangle/data");

describe("14 test cases The Art of Software Testing 2011 pp. 2", () => {
  //
  test("1 valid scalene triangle and valid right triangle", () => {
    expect(solve(3, 4, 5)).toBe(scaleneAndRight);
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
    try {
      expect(solve(0, 3, 3)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("6 one side has a negative value", () => {
    try {
      expect(solve(-1, 2, 2)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
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
    try {
      expect(solve(0, 0, 0)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("12 noninteger values", () => {
    try {
      expect(solve(2.5, 3.5, 5.5)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("13 the wrong number s (arguments) 2 rather than 3 integers", () => {
    try {
      expect(solve(3, 4)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("14 the sum of two of the numbers is equal to the third", () => {
    expect(solve(1, 2, 3)).toBe(notATriangle);
  });

  //
  test("15 valid right triangle and scalene triangle", () => {
    expect(solve(3, 4, 5)).toBe(scaleneAndRight);
  });
});

// ******************************************************************
// /*
//
describe("Boundary Value Analysis + Equivalence Partitioning", () => {
  //
  test("1. the LB (lower bound)  1", () => {
    const n = 1;
    expect(solve(n, n, n)).toBe(equilateral);
  });

  //
  test("2. above the LB (lower bound)  2", () => {
    const n = 2;
    expect(solve(n, n, n)).toBe(equilateral);
  });

  //
  test("3. nominal value 100", () => {
    const n = 100;
    expect(solve(n, n, n)).toBe(equilateral);
  });

  //
  test("4. below the UB (upper bound)  199", () => {
    const n = 199;
    expect(solve(n, n, n)).toBe(equilateral);
  });

  //
  test("5. the UB (upper bound)  200", () => {
    const n = 200;
    expect(solve(n, n, n)).toBe(equilateral);
  });

  // invalid
  test("6. above the UB (upper bound)  201", () => {
    const n = 201;
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // invalid
  test("7. below the LB (lower bound)  -1", () => {
    const n = -1;
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });
});
// */

// ******************************************************************

// /*
//
describe("Error Guessing + Special Values", () => {
  //
  test("1 empty string", () => {
    const n = "";
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("2. decimal value 12.41", () => {
    const n = 12.41;
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("3 Far below the LB ", () => {
    const n = -10090;
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("4 Far above the UB ", () => {
    const n = 12347;
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "adfkh" => non digits (characters)
  test("5 non digits (characters)", () => {
    const n = "adfkh";
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "   " => white spaces
  test("6 white spaces", () => {
    const n = "   ";
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // " 100" => leading spaces
  test("7 leading spaces", () => {
    const n = " 100";
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "  123  " => many leading and trailing spaces
  test("8 many leading and trailing spaces", () => {
    const n = "  123  ";
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "034" => leading 0 ===>>> 28
  // 034 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test("9 leading 0", () => {
    const n = "034"; // 034; //
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "00012" => many leading zero
  // 00012 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test("10 many leading zero", () => {
    const n = "00012"; //  00012; //
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // " +98" => leading && + sign
  test("11 leading && + sign", () => {
    const n = " +98"; // " +98" ;
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "   *24" => many leading && + sign ===>>> Uncaught SyntaxError: Unexpected token '*',  NaN
  test("12 many leading && + sign", () => {
    const n = "   *24"; // *24; //
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "!@#$&*()" => special characters
  test("13 special characters", () => {
    const n = "!@#$&*()"; // "!@#$&*()" ;
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "number" => javascript keyword
  test("14 javascript keyword", () => {
    const n = "number";
    try {
      expect(solve(n, n, n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "10", "100", "12" => # of arguments (more than 1 input)
  test("15 # of arguments (more than 1 input)", () => {
    try {
      expect(solve("10", "100", "12")).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });
});

// */
