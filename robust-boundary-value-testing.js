function generateRobustBoundaryValue(min, max) {
  // TestCases
  const nom = parseInt(max / 2);
  return [min - 1, min, min + 1, nom, max - 1, max, max + 1];
}

// ================

let daysCases = generateRobustBoundaryValue(1, 31);
console.log(daysCases);

let monthsCases = generateRobustBoundaryValue(1, 12);
console.log(monthsCases);

let yearsCases = generateRobustBoundaryValue(1812, 2012);
console.log(yearsCases);

let collection = [...daysCases, ...monthsCases, ...yearsCases];
console.log(collection);
console.log(collection.length);
