const add = (num1, num2) => {
  if ((typeof num1 && typeof num2) !== "number") {
    throw new Error("num1 & num2 must be numbers");
  }

  return num1 + num2;
};

module.exports = add;

// const result = num1 + num2;

// // if (parseFloat(result.toFixed(1)) !== result) {
// //   return parseFloat(result.toFixed(1));
// // }

// return result;
