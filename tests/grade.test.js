const {
  GradeType,
  computeGrade,
  attendanceError,
  marksError,
} = require("../Rajib-Mall/assigment-2/grade");

//#region
// /*
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
// */
//#endregion

//#region
// ******************************************************************
// /*
//
describe("Boundary Value Analysis + Equivalence Partitioning", () => {
  //
  test("1. (attendance) the LB (lower bound)  1", () => {
    const attendance = 1;
    const marks = 90;
    const expected = GradeType.F_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("2. (attendance) above the LB (lower bound)  2", () => {
    const attendance = 2;
    const marks = 90;
    const expected = GradeType.F_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("3. (attendance) nominal value 50", () => {
    const attendance = 50;
    const marks = 90;
    const expected = GradeType.F_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("4. (attendance) below the UB (upper bound)  99", () => {
    const attendance = 99;
    const marks = 99;
    const expected = GradeType.A_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("5. (attendance) the UB (upper bound)  100", () => {
    const attendance = 100;
    const marks = 99;
    const expected = GradeType.A_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  // invalid
  test("6. (attendance) above the UB (upper bound)  101", () => {
    const attendance = 101;
    const marks = 99;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // invalid
  test("7. (attendance) below the LB (lower bound) 0", () => {
    const attendance = 0;
    const marks = 99;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  //
  test("8. (marks) the LB (lower bound)  1", () => {
    const attendance = 90;
    const marks = 1;
    const expected = GradeType.F_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("9. (marks) above the LB (lower bound)  2", () => {
    const attendance = 90;
    const marks = 2;
    const expected = GradeType.F_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("10. (marks) nominal value 50", () => {
    const attendance = 90;
    const marks = 50;
    const expected = GradeType.E_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("11. (marks) below the UB (upper bound) 99", () => {
    const attendance = 99;
    const marks = 99;
    const expected = GradeType.A_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  //
  test("12. (marks) the UB (upper bound)  100", () => {
    const attendance = 99;
    const marks = 100;
    const expected = GradeType.A_Grade;
    const actual = computeGrade(attendance, marks);
    expect(actual).toBe(expected);
  });

  // invalid
  test("13. (marks) above the UB (upper bound)  101", () => {
    const attendance = 99;
    const marks = 101;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // invalid
  test("14. (marks) below the LB (lower bound) 0", () => {
    const attendance = 99;
    const marks = 0;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });
});
// */
//#endregion

// ******************************************************************

// /*
//
describe("Error Guessing + Special Values", () => {
  //
  test("1 (attendance) empty string", () => {
    const attendance = "";
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  //
  test("2. (attendance) decimal value 12.41", () => {
    const attendance = 12.41;
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  //
  test("3 (attendance) Far below the LB ", () => {
    const attendance = -10090;
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  //
  test("4 (attendance) Far above the UB ", () => {
    const attendance = 12347;
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "adfkh" => non digits (characters)
  test("5 (attendance) non digits (characters)", () => {
    const attendance = "adfkh";
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "   " => white spaces
  test("6 (attendance) white spaces", () => {
    const attendance = "   ";
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // " 100" => leading spaces
  test("7 (attendance) leading spaces", () => {
    const attendance = " 100";
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "  123  " => many leading and trailing spaces
  test("8 (attendance) many leading and trailing spaces", () => {
    const attendance = "  123  ";
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "034" => leading 0 ===>>> 28
  // 034 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test("9 (attendance) leading 0", () => {
    const attendance = "034"; // 034; //
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "00012" => many leading zero
  // 00012 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test("10 (attendance) many leading zero", () => {
    const attendance = "00012"; //  00012; //
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // " +98" => leading && + sign
  test("11 (attendance) leading && + sign", () => {
    const attendance = " +98"; // " +98" ;
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "   *24" => many leading && + sign ===>>> Uncaught SyntaxError: Unexpected token '*',  NaN
  test("12 (attendance) many leading && + sign", () => {
    const attendance = "   *24"; // *24; //
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "!@#$&*()" => special characters
  test("13 (attendance) special characters", () => {
    const attendance = "!@#$&*()"; // "!@#$&*()" ;
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "number" => javascript keyword
  test("14 (attendance) javascript reserved keyword", () => {
    const attendance = "number";
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  // "10", "100", "12" => # of arguments (more than 1 input)
  test("15 (attendance) # of arguments (more than 1 input)", () => {
    const attendance = "number";
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks, 1000, 20000, 3090909)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });

  //*************************************************************/

  //
  test("16 (marks) empty string", () => {
    const attendance = 90;
    const marks = "";
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  //
  test("17. (marks) decimal value 12.41", () => {
    const attendance = 90;
    const marks = 12.41;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  //
  test("18 (marks) Far below the LB ", () => {
    const attendance = 90;
    const marks = -10090;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  //
  test("19 (marks) Far above the UB ", () => {
    const attendance = 90;
    const marks = 12347;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "adfkh" => non digits (characters)
  test("20 (marks) non digits (characters)", () => {
    const attendance = 90;
    const marks = "adfkh";
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "   " => white spaces
  test("21 (marks) white spaces", () => {
    const attendance = 90;
    const marks = "   ";
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // " 100" => leading spaces
  test("22 (marks) leading spaces", () => {
    const attendance = 90;
    const marks = " 100";
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "  123  " => many leading and trailing spaces
  test("23 (marks) many leading and trailing spaces", () => {
    const attendance = 90;
    const marks = "  123  ";
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "034" => leading 0 ===>>> 28
  // 034 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test("24 (marks) leading 0", () => {
    const attendance = 90;
    const marks = "034"; // 034; //
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "00012" => many leading zero
  // 00012 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test("25 (marks) many leading zero", () => {
    const attendance = 90;
    const marks = "00012"; //  00012; //
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // " +98" => leading && + sign
  test("26 (marks) leading && + sign", () => {
    const attendance = 90;
    const marks = " +98"; // " +98" ;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "   *24" => many leading && + sign ===>>> Uncaught SyntaxError: Unexpected token '*',  NaN
  test("27 (marks) many leading && + sign", () => {
    const attendance = 90;
    const marks = "   *24"; // *24; //
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "!@#$&*()" => special characters
  test("28 (marks) special characters", () => {
    const attendance = 90;
    const marks = "!@#$&*()"; // "!@#$&*()" ;
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "number" => javascript keyword
  test("29 (marks) javascript reserved keyword", () => {
    const attendance = 90;
    const marks = "number";
    try {
      expect(computeGrade(attendance, marks)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(marksError);
    }
  });

  // "10", "100", "12" => # of arguments (more than 1 input)
  test("30 (marks) # of arguments (more than 1 input)", () => {
    const attendance = "number";
    const marks = 90;
    try {
      expect(computeGrade(attendance, marks, 1000, 20000, 3090909)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(attendanceError);
    }
  });
});

// */
