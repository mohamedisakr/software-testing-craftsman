async function isValidAmount(amount) {
  let theAmount = parseFloat(amount);

  if (typeof theAmount !== "number") {
    throw new Error("Please type number!");
  }

  if (Number.isNaN(theAmount)) {
    throw new Error("Please type number!");
  }

  return await theAmount;
}

async function inValidRange(amount) {
  const isValid = isValidAmount(amount);
  try {
    if (isValid) {
      if (amount >= 1 && amount <= 10000) {
        return true;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return false;
}

async function transferMoney(amount) {
  // TODO: implement the logic
}

module.exports = { transferMoney, isValidAmount, inValidRange };

/*
const amount = "123"; //"lfjkadio*)(";
// const expected = new Error("Please type number!");
const actual = transferMoney(amount);
console.log(`the result is ${actual}, and its type is ${typeof actual}`);
*/
