async function transferMoney(amount) {
  let theAmount = parseFloat(amount);
  if (typeof theAmount !== "number") {
    console.log(`${theAmount} is NOT number`);
    throw new Error("Please type number!");
  }

  // console.log(`${theAmount} is number`);
  return theAmount;
}

module.exports = { transferMoney };

const amount = "lfjkadio*)(";
// const expected = new Error("Please type number!");
const actual = transferMoney(amount);
console.log(`the result is ${actual}, and its type is ${typeof actual}`);
