const yesterDate = require("../YesterDate-problem");

// describe("Test YesterDate function", () => {
describe("first day of the year", () => {
  test("first day", () => {
    const theDate = [1, 1, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 12, 2010]);
  });
});

describe("feb day", () => {
  test("leap year and day = 29", () => {
    const theDate = [29, 2, 2012];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([28, 2, 2012]);
  });

  test("not leap year and day = 28", () => {
    const theDate = [28, 2, 2010];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([27, 2, 2010]);
  });

  test("test 1: day > 1 and day <= 27", () => {
    const theDate = [2, 2, 2012];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([1, 2, 2012]);
  });

  test("test 2: day > 1 and day <= 27", () => {
    const theDate = [8, 2, 2010];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([7, 2, 2010]);
  });

  test("first day of feb", () => {
    const theDate = [1, 2, 2010];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 1, 2010]);
  });
});

// });
