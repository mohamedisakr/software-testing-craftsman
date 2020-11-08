// TODO: implement different algorithm
// use clinic.js profiler to compare each algorithm
function gcd(x, y) {
  while (x !== y) {
    if (x > y) {
      x -= y;
      //   x /= y;
    } else {
      y -= x;
      //   y /= x;
    }
  }
  return x;
}

function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

/**
 * recursive factorial
 * @param {*} n the number
 */
function fact2(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * fact2(n - 1);
}

function permutation(n, r) {
  return factorial(n) / factorial(n - r);
}

function combination(n, r) {
  const numerator = factorial(n);
  const denum = factorial(r) * factorial(n - r);
  return numerator / denum;
}
module.exports = { gcd, factorial, fact2, permutation, combination };
