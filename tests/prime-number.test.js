const { isPrime } = require("../prime-number");

//
describe("Boundary Value Analysis + Equivalence Partitioning", () => {
  //
  test("the LB (lower bound) of value 0", () => {
    const n = 0;
    const actual = isPrime(n);
    // console.log(actual);
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
    expect(isPrime(n)).rejects.toThrowError(
      "The number should be in range from 0 to 1000"
    );
  });

  // invalid
  test("below the LB (lower bound) of value -1", () => {
    const n = -1;
    expect(isPrime(n)).rejects.toThrowError(
      "The number should be in range from 0 to 1000"
    );
  });
});

/*
//
describe("Error Guessing + Special Values", () => {
  //
  test("empty string",  () => {
    const n = "";
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
  test("empty string",  () => {
    const n = "";
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
  test("decimal value",  () => {
    const n = 12.41;
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
  test("Far below the LB of value",  () => {
    const n = -10090;
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
  test("Far above the UB of value",  () => {
    const n = 12347;
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "adfkh" => non digits (characters)
  test("non digits (characters)",  () => {
    const n = "adfkh";
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "   " => white spaces
  test("white spaces",  () => {
    const n = "   ";
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // " 100" => leading spaces
  test("leading spaces",  () => {
    const n = " 100";
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "  123  " => many leading and trailing spaces
  test("many leading and trailing spaces",  () => {
    const n = "  123  ";
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "034" => leading 0 ===>>> 28
  // 034 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test("leading 0",  () => {
    const n = "034"; // 034; //
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "00012" => many leading zero
  // 00012 ===>>> SyntaxError: Legacy octal literals are not allowed in strict mode
  test(" many leading zero",  () => {
    const n = "00012"; //  00012; //
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // " +98" => leading && + sign
  test("leading && + sign",  () => {
    const n = " +98"; // " +98" ;
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "   *24" => many leading && + sign ===>>> Uncaught SyntaxError: Unexpected token '*',  NaN
  test("many leading && + sign",  () => {
    const n = "   *24"; // *24; //
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "!@#$&*()" => special characters
  test("special characters",  () => {
    const n = "!@#$&*()"; // "!@#$&*()" ;
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "number" => javascript keyword
  test("javascript keyword",  () => {
    const n = "number";
     expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "10", "100", "12" => # of arguments (more than 1 input)
  test("# of arguments (more than 1 input)",  () => {
    //const n = "number";
     expect(isPrime("10", "100", "12")).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
});
*/
