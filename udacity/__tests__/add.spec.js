const add = require("../add");
const { normalTestCases, edgeTestCases } = require("../fixtures/test-data");

describe("add function NORMAL test suite", () => {
  normalTestCases.forEach((testCase) => {
    const { description, num1, num2, actual } = testCase;
    it(`${description}`, () => {
      const expected = add(num1, num2);
      expect(expected).toEqual(actual);
    });
  });
});

describe("add function EDGE test suite", () => {
  edgeTestCases.forEach((testCase) => {
    const { description, num1, num2, actual } = testCase;
    it(`${description}`, () => {
      expect.assertions(1);

      try {
        const expected = add(num1, num2);
        expect(expected).toEqual(actual);
      } catch (e) {
        expect(e).toBeTruthy();
      }
    });
  });
});
