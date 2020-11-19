const { main } = require("../Rajib-Mall/assigment-3/exercise-3");

/**
 At least how many test cases are needed for achieving decision coverage on the given C code?
 A1: {a: a < 10}
 A2: {a: a > 100}
 A3: {a: a = 20} 
 A4: {a: a = 30} 
 A5: {a: a !< 10 & a !> 100 & a != 20 & a != 30 }
 */

// const { main } = require("../Rajib-Mall/assigment-3/exercise-3");

describe("decision coverage test cases", () => {
  //
  test("(1) a < 10", () => {
    let a = 9;
    const expected = 10;
    const actual = main(a);
    expect(actual).toBe(expected);
  });
});
