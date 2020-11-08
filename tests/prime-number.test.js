const { isPrime } = require("../prime-number");

//
describe("Boundary Value Analysis + Equivalence Partitioning", () => {
  //
  test("the LB (lower bound) of value", async () => {
    const n = 0;
    await expect(isPrime(n)).toBeFalsy();
  });

  //
  test("above the LB (lower bound) of value", async () => {
    const n = 1;
    await expect(isPrime(n)).toBeTruthy();
  });

  //
  test("above the LB (lower bound) of value", async () => {
    const n = 2;
    await expect(isPrime(n)).toBeTruthy();
  });

  //
  test("nominal value", async () => {
    const n = 500;
    await expect(isPrime(n)).toBeTruthy();
  });

  //
  test("below the UB (upper bound) of value", async () => {
    const n = 999;
    await expect(isPrime(n)).toBeTruthy();
  });

  //
  test("the UB (upper bound) of value", async () => {
    const n = 1000;
    await expect(isPrime(n)).toBeTruthy();
  });

  //
  test("above the UB (upper bound) of value", async () => {
    const n = 1001;
    await expect(isPrime(n)).toBeFalsy();
  });

  //
  test("below the LB (lower bound) of value", async () => {
    const n = -1;
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });
});

//
describe("Error Guessing + Special Values", () => {
  //
  test("empty string", async () => {
    const n = "";
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
  test("empty string", async () => {
    const n = "";
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
  test("decimal value", async () => {
    const n = 12.41;
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
  test("Far below the LB of value", async () => {
    const n = -10090;
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
  test("Far above the UB of value", async () => {
    const n = 12347;
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "adfkh" => non digits (characters)
  test("non digits (characters)", async () => {
    const n = "adfkh";
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "   " => white spaces
  test("white spaces", async () => {
    const n = "   ";
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // " 100" => leading spaces
  test("leading spaces", async () => {
    const n = " 100";
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "  123  " => many leading and trailing spaces
  test("many leading and trailing spaces", async () => {
    const n = "  123  ";
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "034" => leading 0 ===>>> 28
  test("leading 0", async () => {
    const n = 034; // "034" ;
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "00012" => many leading zero
  test(" many leading zero", async () => {
    const n = 00012; // "00012" ;
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // " +98" => leading && + sign
  test("leading && + sign", async () => {
    const n = " +98"; // " +98" ;
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "   *24" => many leading && + sign ===>>> Uncaught SyntaxError: Unexpected token '*',  NaN
  test("many leading && + sign", async () => {
    const n = "   *24"; // *24; //
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "!@#$&*()" => special characters
  test("special characters", async () => {
    const n = "!@#$&*()"; // "!@#$&*()" ;
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "number" => javascript keyword
  test("javascript keyword", async () => {
    const n = "number";
    await expect(isPrime(n)).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  // "10", "100", "12" => # of arguments (more than 1 input)
  test("# of arguments (more than 1 input)", async () => {
    //const n = "number";
    await expect(isPrime("10", "100", "12")).rejects.toThrowError(
      "You should type valid integer number."
    );
  });

  //
});
