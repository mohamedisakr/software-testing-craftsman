// involves the Cartesian product of the seven-element sets we used
// in robustness testing resulting in 7^n test cases.

function generateRobustBoundaryValue(min, max) {
  // TestCases
  const nom = parseInt(max / 2);
  return [min - 1, min, min + 1, nom, max - 1, max, max + 1];
}

function generateProduct(...arrays) {
  let data = [].concat(arrays);
  return data.reduce((acc, curr) =>
    acc.flatMap((c) => curr.map((n) => [].concat(c, n)))
  );
}

let daysCases = generateRobustBoundaryValue(1, 31);
// console.log(daysCases);

let monthsCases = generateRobustBoundaryValue(1, 12);
// console.log(monthsCases);

let yearsCases = generateRobustBoundaryValue(1812, 2012);
// console.log(yearsCases);

const product = generateProduct(daysCases, monthsCases, yearsCases);
console.log(product);
