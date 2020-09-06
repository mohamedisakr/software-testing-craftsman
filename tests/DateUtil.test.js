const {
  isValidMonth,
  isValidDayAndMonthPair,
  isValidYear,
  isLeap,
  validateFirstDayIn31,
  validateFirstDayIn30,
} = require("../DateUtil");

describe("test isValidDayAndMonthPair function", () => {
  test("valid month & day pair (month 31)", () => {
    const theDate = [1, 1, 2010];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(true);
  });

  test("invalid month & day pair (month 30)", () => {
    const theDate = [31, 6, 2000];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(false);
  });

  test("valid month & day pair (month 30)", () => {
    const theDate = [30, 9, 2000];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(true);
  });

  test("valid month & day pair (month 31)", () => {
    const theDate = [31, 7, 2000];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(true);
  });

  test("valid month & day pair (leap year)", () => {
    const theDate = [29, 2, 2008];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(true);
  });

  test("invalid month & day pair (not leap year)", () => {
    const theDate = [29, 2, 2009];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(false);
  });

  test("valid month & day pair (not leap year)", () => {
    const theDate = [28, 2, 2009];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(true);
  });

  test("invalid month", () => {
    const theDate = [28, 21, 2009];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(false);
  });

  test("invalid day", () => {
    const theDate = [33, 3, 2009];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(false);
  });

  test("invalid year", () => {
    const theDate = [28, 21, 2040];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(false);
  });

  test("valid first day of the year", () => {
    const theDate = [1, 1, 2010];
    const result = isValidDayAndMonthPair(theDate[0], theDate[1], theDate[2]);
    expect(result).toBe(true);
  });
});
////////////////////////
// isLeap
describe("test isLeap function", () => {
  test("valid leap year", () => {
    const theDate = [20, 6, 2000];
    const result = isLeap(theDate[2]);
    expect(result).toBe(true);
  });

  test("valid leap year", () => {
    const theDate = [20, 6, 2001];
    const result = isLeap(theDate[2]);
    expect(result).toBe(false);
  });
});

describe("test isValidMonth function", () => {
  test("valid month", () => {
    const result = isValidMonth(1);
    expect(result).toBe(true);
  });

  test("invalid month", () => {
    const result = isValidMonth(0);
    expect(result).toBe(false);
  });

  test("invalid month", () => {
    const result = isValidMonth(13);
    expect(result).toBe(false);
  });
});

describe("test isValidYear function", () => {
  test("valid year", () => {
    const result = isValidYear(2010);
    expect(result).toBe(true);
  });

  test("valid year", () => {
    const result = isValidYear(1812);
    expect(result).toBe(true);
  });

  test("invalid year", () => {
    const result = isValidYear(1811);
    expect(result).toBe(false);
  });
  test("valid year", () => {
    const result = isValidYear(2013);
    expect(result).toBe(false);
  });
});

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
  test("first day in march", () => {
    const theDate = [1, 3, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    // mocha => expect([1,2]).deep.to.equal([1,2]);
    expect(result.sort()).toEqual([28, 2, 2010].sort());
  });

  test("first day in may", () => {
    const theDate = [1, 5, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([30, 4, 2011]);
  });

  test("first day in july", () => {
    const theDate = [1, 7, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([30, 6, 2011]);
  });

  test("first day in august", () => {
    const theDate = [1, 8, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 7, 2011]);
  });

  test("first day in october", () => {
    const theDate = [1, 10, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([30, 9, 2011]);
  });

  test("first day in december", () => {
    const theDate = [1, 12, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([30, 11, 2011]);
  });
});

describe("first day 30 days month (4, 6, 9, 11)", () => {
  test("first day in april", () => {
    const theDate = [1, 4, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 3, 2011]);
  });

  test("first day in june", () => {
    const theDate = [1, 6, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 5, 2011]);
  });

  test("first day in september", () => {
    const theDate = [1, 9, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 8, 2011]);
  });

  test("first day in november", () => {
    const theDate = [1, 11, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 10, 2011]);
  });
});
*/
