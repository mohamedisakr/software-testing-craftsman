const nextDate = require("../NextDate-problem");
describe("edge cases for nextdate function", () => {
  test("exercise 3, chapter 2:  June 31, 1812", () => {
    const theDate = [31, 6, 1812];
    const result = nextDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([1, 7, 1812]);
  });
});
