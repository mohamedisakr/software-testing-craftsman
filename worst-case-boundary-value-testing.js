// It also represents much more effort:
// worst-case testing for a function of n variables generates
// 5^n test cases, as opposed to 4n + 1 test cases for boundary value analysis.

function generateBoundaryValueAnalysis(min, max) {
  // TestCases
  const nom = parseInt(max / 2);
  return [min, min + 1, nom, max - 1, max];
}
