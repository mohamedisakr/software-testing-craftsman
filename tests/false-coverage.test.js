const { isValidLength } = require("../white-box/false-coverage");

describe("code coverage", () => {
  test("happy path", () => {
    const expected = true;
    const actual = isValidLength("long word enough");
    expect(actual).toBe(expected);
  });

  test("sad path", () => {
    const expected = false;
    const actual = isValidLength("");
    expect(actual).toBe(expected);
  });
});
