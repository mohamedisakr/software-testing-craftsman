const { isPrime } = require("../prime-number");
const errorMessage =
  "The number should be integer, within range from 0 to 1000";

//
describe("Boundary Value Analysis + Equivalence Partitioning", () => {
  //
  test("the LB (lower bound) of value 0", () => {
    const n = 0;
    const actual = isPrime(n);
    expect(actual).toBeFalsy();
  });

  //
  test("above the LB (lower bound) of value 1", () => {
    const n = 1;
    expect(isPrime(n)).toBeTruthy();
  });

  //
  test("above the LB (lower bound) of value 2", () => {
    const n = 2;
    expect(isPrime(n)).toBeFalsy();
  });

  //
  test("nominal value 500", () => {
    const n = 500;
    expect(isPrime(n)).toBeFalsy();
  });

  //
  test("below the UB (upper bound) of value 999", () => {
    const n = 999;
    expect(isPrime(n)).toBeFalsy();
  });

  //
  test("the UB (upper bound) of value 1000", () => {
    const n = 1000;
    expect(isPrime(n)).toBeFalsy();
  });

  // invalid
  test("above the UB (upper bound) of value 1001", () => {
    const n = 1001;
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // invalid
  test("below the LB (lower bound) of value -1", () => {
    const n = -1;
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });
});

// ******************************************************************

//
describe("Error Guessing + Special Values", () => {
  //
  test("empty string", () => {
    const n = "";
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("decimal value 12.41", () => {
    const n = 12.41;
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("Far below the LB of value", () => {
    const n = -10090;
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  //
  test("Far above the UB of value", () => {
    const n = 12347;
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "adfkh" => non digits (characters)
  test("non digits (characters)", () => {
    const n = "adfkh";
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "   " => white spaces
  test("white spaces", () => {
    const n = "   ";
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // " 100" => leading spaces
  test("leading spaces", () => {
    const n = " 100";
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "  123  " => many leading and trailing spaces
  test("many leading and trailing spaces", () => {
    const n = "  123  ";
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "034" => leading 0 ===>>> 28
  // 034 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test("leading 0", () => {
    const n = "034"; // 034; //
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "00012" => many leading zero
  // 00012 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test(" many leading zero", () => {
    const n = "00012"; //  00012; //
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // " +98" => leading && + sign
  test("leading && + sign", () => {
    const n = " +98"; // " +98" ;
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "   *24" => many leading && + sign ===>>> Uncaught SyntaxError: Unexpected token '*',  NaN
  test("many leading && + sign", () => {
    const n = "   *24"; // *24; //
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "!@#$&*()" => special characters
  test("special characters", () => {
    const n = "!@#$&*()"; // "!@#$&*()" ;
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "number" => javascript keyword
  test("javascript keyword", () => {
    const n = "number";
    try {
      expect(isPrime(n)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });

  // "10", "100", "12" => # of arguments (more than 1 input)
  test("# of arguments (more than 1 input)", () => {
    //const n = "number";
    try {
      expect(isPrime("10", "100", "12")).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorMessage);
    }
  });
});
