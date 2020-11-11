const {
  scalene,
  right,
  scaleneAndRight,
  equilateral,
  isosceles,
  notATriangle,
  errorMessage,
} = require("./data");

function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

function isEquilateral(a, b, c) {
  return a === b && b === c;
}

function isIsosceles(a, b, c) {
  return a === b || b === c || a === c;
}

function isRight(a, b, c) {
  return (
    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
    Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) ||
    Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2)
  );
}

function isScalene(a, b, c) {
  return a !== b && b !== c;
}

function isScaleneAndRight(a, b, c) {
  return isScalene(a, b, c) && isRight(a, b, c);
}

function isInValidRange(side) {
  if (side < 1 || side > 200) {
    return false;
  }
  return true;
}

function isInteger(side) {
  return Number.isInteger(side);
}

function solve(a, b, c) {
  // check if side in valid range 1 : 200
  if (
    isInValidRange(a) === false ||
    isInValidRange(b) === false ||
    isInValidRange(c) === false
  ) {
    throw new RangeError(errorMessage);
  }

  // check if side is integer number
  if (isInteger(a) !== true || isInteger(b) !== true || isInteger(c) !== true) {
    throw new RangeError(errorMessage);
  }

  // first check if the 3 side can form a tringle
  if (isTriangle(a, b, c) !== true) {
    return notATriangle;
  }

  // output the triangle type (scalene,  right,  scalene and right,  equilateral,  isosceles)
  if (isEquilateral(a, b, c)) {
    return equilateral;
  } else if (isIsosceles(a, b, c)) {
    return isosceles;
  } else if (isScaleneAndRight(a, b, c)) {
    return scaleneAndRight;
  } else if (isScalene(a, b, c)) {
    return scalene;
  } else if (isRight(a, b, c)) {
    return right;
  }
}

module.exports = { solve };
