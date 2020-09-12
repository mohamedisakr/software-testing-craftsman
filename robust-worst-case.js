// involves the Cartesian product of the seven-element sets we used
// in robustness testing resulting in 7^n test cases.

function generateRobustBoundaryValue(min, max) {
  // TestCases
  const nom = parseInt(max / 2);
  return [min - 1, min, min + 1, nom, max - 1, max, max + 1];
}
