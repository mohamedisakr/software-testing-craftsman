// const isPalindrome = (

const isPalindrome = (text) => {
  // const str = text.split(" ").reverse().join("");
  // console.log(str);
  // return text === str;
  // return text === text.split(" ").reverse().join("");
  return text.toLowerCase() === text.toLowerCase().split("").reverse().join("");
};

module.exports = isPalindrome;
