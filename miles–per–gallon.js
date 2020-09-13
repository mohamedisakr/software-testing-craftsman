// Apply special value testing to the miles per gallon example in Tables 5.9 and 5.10.
// Provide reasons for your chosen test cases.

// The boundaries are
// (1) 0 ≤ a < 10,000
// (2) 0 ≤ b < 10,000
// (3) 0 ≤ c < 18.8
// (4) a ≥ b
function isValid(a, b) {}

// F = (a – b) / c
function F(a, b, c) {
  return (a - b) / c;
}

// let case1 = F(0, 5000, 9.4);
// console.log(case1);

// let divideByZero = F(5000, 1000, 0);
// console.log(divideByZero);

// let case3 = F(5000, 5000, 9.4);
// console.log(case3);

let case9 = F(5000, 9998, 9.4);
console.log(case9);
