const scalene = "Scalene";
const right = "Right";
const scaleneAndRight = "Scalene and Right";
const equilateral = "Equilateral";
const isosceles = "Isosceles";
const notATriangle = "Not A Triangle";

const errorMessage =
  "The number should be integer, within range between 1 and 200";

const testData = [
  {
    id: 1,
    args: [3, 4, 5],
    desc: "valid scalene triangle",
    expected: "scalene",
  },

  {
    id: 2,
    args: [3, 3, 3],
    desc: "valid equilateral triangle",
    expected: "equilateral",
  },

  {
    id: 3,
    args: [3, 4, 4],
    desc: "valid isosceles triangle",
    expected: "isosceles",
  },

  {
    id: "4.a",
    args: [3, 3, 4],
    desc:
      "valid isosceles triangles, tried all 3 permutation of 2 equal sides ",
    expected: "isosceles",
  },
  {
    id: "4.b",
    args: [3, 4, 3],
    desc:
      "valid isosceles triangles, tried all 3 permutation of 2 equal sides ",
    expected: "isosceles",
  },
  {
    id: "4.c",
    args: [4, 3, 3],
    desc:
      "valid isosceles triangles, tried all 3 permutation of 2 equal sides ",
    expected: "isosceles",
  },

  {
    id: 5,
    args: [0, 3, 3],
    desc: "one side has a zero value",
    expected: "notATriangle",
  },

  {
    id: 6,
    args: [-1, 2, 2],
    desc: "one side has a negative value",
    expected: "notATriangle",
  },

  {
    id: 7,
    args: [1, 2, 3],
    desc: "the sum of 2 of the sides is equal to the third",
    expected: "notATriangle",
  },

  {
    id: "8.a",
    args: [1, 2, 3],
    desc: "the sum of two of the numbers is equal to the third",
    expected: "notATriangle",
  },
  {
    id: "8.b",
    args: [1, 3, 2],
    desc: "the sum of two of the numbers is equal to the third",
    expected: "notATriangle",
  },
  {
    id: "8.c",
    args: [3, 1, 2],
    desc: "the sum of two of the numbers is equal to the third",
    expected: "notATriangle",
  },

  {
    id: 9,
    args: [12, 15, 30],
    desc: "the sum of two of the numbers is less than the third",
    expected: "notATriangle",
  },

  {
    id: "10.a",
    args: [30, 12, 15],
    desc: "the sum of two of the numbers is less than the third",
    expected: "notATriangle",
  },
  {
    id: "10.b",
    args: [30, 15, 12],
    desc: "the sum of two of the numbers is less than the third",
    expected: "notATriangle",
  },
  {
    id: "10.c",
    args: [15, 30, 12],
    desc: "the sum of two of the numbers is less than the third",
    expected: "notATriangle",
  },

  {
    id: 11,
    args: [0, 0, 0],
    desc: "all sides are zero",
    expected: "notATriangle",
  },

  {
    id: 12,
    args: [2.5, 3.5, 5.5],
    desc: "noninteger values",
    expected: "scalene",
  },

  {
    id: 13,
    args: [3, 4],
    desc: "the wrong number of values (arguments) 2 rather than 3 integers",
    expected: "notATriangle",
  },

  {
    id: 14,
    args: [1, 2, 3],
    desc: "the sum of two of the numbers is equal to the third",
    expected: "notATriangle",
  },
];

module.exports = {
  testData,
  scalene,
  right,
  scaleneAndRight,
  equilateral,
  isosceles,
  notATriangle,
  errorMessage,
};
