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

// we will always have the same # of weak equivalence class test cases as classes
// in the partition with the largest # of subsets
function ReturnObject(amount) {
  let rate = amount * 0.08;
  let total = amount + rate;
  return { rate, total };
}

const { rate, total } = ReturnObject(70000);
console.log(rate, total);
