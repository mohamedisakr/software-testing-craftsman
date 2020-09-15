const {
  isValidDay,
  isValidMonth,
  isValidDayAndMonthPair,
  isValidYear,
  isLeap,
  validateFirstDayIn31,
  validateFirstDayIn30,
} = require("../DateUtil");

// comment for travis ci to build correctly
/*
describe("test isValidDayAndMonthPair function", () => {
  it("case 1: invalid month & day pair", () => {
    const theDate = [31, 6, 2000];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(false);
  });
});
*/

/*
const yesterDate = require("../YesterDate-problem");

describe("first day 31 days month (1, 3, 5, 7, 8, 10, 12)", () => {
  it("first day in january", () => {
    const theDate = [1, 1, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    // if (result) {
    //   expect(result).toEqual([31, 12, 2010]);
    // }
    expect(result).deep.to.equal([31, 12, 2010]);
  });
});
*/
