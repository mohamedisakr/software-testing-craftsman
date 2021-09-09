const testCases = require("../palindrome-data");
const isPalindrome = require("../palindrome");

describe("isPalindrome - data driven", () => {
  test.each(testCases)('isPalindrome("%s") - %s', (input, expected) => {
    // console.log(input);
    const result = isPalindrome(input);
    expect(result).toBe(expected);
  });
});
