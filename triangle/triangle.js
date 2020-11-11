const {
  scalene,
  equilateral,
  isosceles,
  right,
  notATriangle,
} = require("./data");

function solve(a, b, c) {
  // first check if the 3 side can form a tringle
  let isTriangle = false;
  if (a + b > c && b + c > a && a + c > b) {
    isTriangle = true;
    if (isTriangle) {
      if (a === b && b === c) {
        return equilateral;
      } else if (a === b || b === c || a === c) {
        return isosceles;
      } else {
        return scalene;
      }
    }
  }
  return notATriangle;
}

module.exports = { solve };
