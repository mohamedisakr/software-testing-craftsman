const { add } = require("../js/async-function");

describe("test async function", () => {
  test("add function async", async () => {
    const expected = 28;
    const actual = await add(21, 7);
    expect(actual).toBe(expected);
  });
});
