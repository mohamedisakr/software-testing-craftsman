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
  // edgeTestCases.forEach((testCase) => {
  //   const { description, num1, num2, actual } = testCase;
  //   it(`${description}`, () => {
  //     expect.assertions(1);

  //     try {
  //       const expected = add(num1, num2);
  //       expect(expected).toEqual(actual);
  //     } catch (e) {
  //       expect(e).toBeTruthy();
  //     }
  //   });
  // });

  //   it("What about multiple expect() function in 1 test() / it() block", () => {
  //     expect(add(1, 2)).toEqual(3);
  //     expect(add(1, 2)).not.toEqual(3);
  //   });

  // // You can also use the exact error message or a regexp
  // expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  edgeTestCases.forEach((testCase) => {
    const { description, num1, num2, actual } = testCase;
    it(`${description}`, () => {
      expect(() => add(num1, num2)).toThrow("num1 & num2 must be numbers");
    });
  });
});
