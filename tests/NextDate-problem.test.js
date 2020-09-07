const { nextDate, isAllValid, isValidYear } = require("../NextDate-problem");

/*
describe("edge cases for nextdate function", () => {
  test("exercise 3, chapter 2:  June 31, 1812", () => {
    const theDate = [31, 6, 1812];
    const result = nextDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toBeNull(); //[1, 7, 1812]
  });

  test("first day of the year", () => {
    // const theDate = [1, 1, 2010];
    const result = nextDate(1, 1, 2010); //(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(null); //.toContain([2, 1, 2010]); //[1, 7, 1812]
  });

  test("last day of the year", () => {
    // const theDate = [1, 1, 2010];
    const result = nextDate(31, 12, 2010); //(theDate[0], theDate[1], theDate[2]);
    expect(result).toContain([1, 1, 2011]); //.toContain([2, 1, 2010]); //[1, 7, 1812]
  });
});
//*/
/*
describe("isAllValid function", () => {
  test("valid day, month, and year combinations", () => {
    const theDate = [23, 2, 1978];
    const result = isAllValid(theDate[0], theDate[1], theDate[2]);
    expect(result).toBeTruthy(); //[1, 7, 1812]
  });

  test("invalid day, month, and year combinations", () => {
    const theDate = [31, 6, 1812];
    const result = isAllValid(theDate[0], theDate[1], theDate[2]);
    expect(result).toBeFalsy(); //[1, 7, 1812]
  });
});
*/
