const normalTestCases = [
  // { description: "should add integers", num1: 1, num2: 2, actual: 3 },
  ["should add integers", 1, 2, 3],
];

const decimalTestCase = [["should add decimals", 0.1, 0.2, 0.3]];

const edgeTestCases = [["should throw error if strings", "1", "2", "3"]];

module.exports = { normalTestCases, decimalTestCase, edgeTestCases };
