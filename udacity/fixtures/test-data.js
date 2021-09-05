const normalTestCases = [
  { description: "should add integers", num1: 1, num2: 2, actual: 3 },
];

const decimalTestCase = [
  { description: "should add decimals", num1: 0.1, num2: 0.2, actual: 0.3 },
];

const edgeTestCases = [
  {
    description: "should throw error if strings",
    num1: "1",
    num2: "2",
    actual: "3",
  },
];

module.exports = { normalTestCases, decimalTestCase, edgeTestCases };
