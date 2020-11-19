const { GradeType, computeGrade } = require("../Rajib-Mall/assigment-2/grade");

//
describe("8 test cases for decision table testing", () => {
  //
  test("(1) attendance < 80% && any marks (<= 100)", () => {
    const attendance = 70;
    const marks = 90;
    const expected = GradeType.F_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("(2) attendance > 80% && 90% <= marks <= 100%", () => {
    const attendance = 90;
    const marks = 90;
    const expected = GradeType.A_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("(3) attendance > 80% && 80% <= marks < 90%", () => {
    const attendance = 90;
    const marks = 89;
    const expected = GradeType.B_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("(4) attendance > 80% && 70% <= marks < 80%", () => {
    const attendance = 90;
    const marks = 79;
    const expected = GradeType.C_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("(5) attendance > 80% && 60% <= marks < 70%", () => {
    const attendance = 90;
    const marks = 69;
    const expected = GradeType.D_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("(6) attendance > 80% && 50% <= marks < 60%", () => {
    const attendance = 90;
    const marks = 59;
    const expected = GradeType.E_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("(7) attendance > 80% && 30% <= marks < 50%", () => {
    const attendance = 90;
    const marks = 40;
    const expected = GradeType.F_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("(8) attendance > 80% && marks < 30%", () => {
    const attendance = 90;
    const marks = 29;
    const expected = GradeType.F_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
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
