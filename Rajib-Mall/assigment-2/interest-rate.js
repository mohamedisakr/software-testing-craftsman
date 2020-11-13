//#region
/*
NPTEL Software Testing Prof Rajib Mall, Assignments 2, Exercise 3

https://www.myloancare.in/fixed-deposit/fd-calculator/

In a certain bank, customers are offered the following interest rates on deposites.

For deposites of any amount between 1000 and 100,000 the rate of interest:
	6% for deposit upto 1 year
	7% for deposit over 1 year but less than 3 years
	8% for deposit over 3 year but less than 10 years
For deposites of any amount between 100,000 and 10,000,000 the rate of interest:
	7% for deposit upto 1 year
	8% for deposit over 1 year but less than 3 years
	9% for deposit over 3 year but less than 10 years

A function named compute-interest-rate(amount, months) was developed by the bank 
to compute the interest rate applicable for a deposite made by a customer. 
At least how many test cases are needed for weak equivalence class testing of the function? 

********************
The least test cases are needed for weak equivalence class testing of the function = 
the same # of weak equivalence class test cases as classes in the partition with 
the largest # of subsets = 3
*********************

*/
//#endregion
//#region
/*
// weak equivalence class test cases: we will always have the same # of weak equivalence
// class test cases as classes in the partition with the largest # of subsets

// Strong equivalence class testing is based on the multiple fault assumption,
// so we need test cases from each element of the Cartesian product of the
// equivalence classes
*/
//#endregion

const percentages = [0.06, 0.07, 0.08, 0.09];
const monthErrorMessage =
  "Month should be integer, within range from 1 to less than 120";
const amountErrorMessage =
  "Amount should be integer, within range from 1,000 to less than 10,000,000";

function computeInterestRate(amount, month) {
  // check for amount valid range
  if (amount < 1000 || amount > 10000000) {
    throw new RangeError(amountErrorMessage);
  }
  // check for amount valid range
  if (month < 1 || month > 120) {
    throw new RangeError(monthErrorMessage);
  }

  let rate = 0;
  let total = 0;
  // calculate interest rate from amount between 1,000 : 100,000
  if (amount >= 1000 && amount < 100000) {
    if (month >= 1 && month < 12) {
      rate = parseInt(amount * percentages[0]);
      total = amount + rate;
      return { rate, total };
    } else if (month >= 12 && month < 36) {
      rate = parseInt(amount * percentages[1]);
      total = amount + rate;
      return { rate, total };
    } else {
      rate = parseInt(amount * percentages[2]);
      total = amount + rate;
      return { rate, total };
    }
  } else if (amount >= 100000 && amount < 10000000) {
    if (month >= 1 && month < 12) {
      rate = parseInt(amount * percentages[1]);
      total = amount + rate;
      return { rate, total };
    } else if (month >= 12 && month < 36) {
      rate = parseInt(amount * percentages[2]);
      total = amount + rate;
      return { rate, total };
    } else {
      rate = parseInt(amount * percentages[3]);
      total = amount + rate;
      return { rate, total };
    }
  }
}

function ReturnObject(amount) {
  let rate = amount * percentages[2];
  let total = amount + rate;
  return { rate, total };
}

// const { rate, total } = ReturnObject(70000);
// console.log(rate, total);

module.exports = { computeInterestRate, monthErrorMessage, amountErrorMessage };
