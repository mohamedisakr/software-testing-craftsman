// involves the Cartesian product of the seven-element sets we used
// in robustness testing resulting in 7^n test cases.
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

saveFileToDisk = async (fileName) => {
  await writeFile(`gen/${fileName}.test.js`, desc); // robust-worst-case-test-cases
};

function calculateRobustBoundaryValue(min, max) {
  const nom = parseInt(max / 2);
  return [min - 1, min, min + 1, nom, max - 1, max, max + 1];
}

function generateCartesianProduct(...data) {
  let collection = [].concat(data);
  return collection.reduce((acc, curr) =>
    acc.flatMap((c) => curr.map((n) => [].concat(c, n)))
  );
}

function generateTestCases(product, functionName) {
  let desc = `const solve = require('../triangle-problem');\n\n`;
  desc += `describe("test ${functionName} function", () => {\n`;
  product.forEach((val, index) => {
    desc += `\nit("case ${index + 1}" , () => {\n`;
    desc += `\tconst theDate = [${val}];\n`;
    desc += `\tconst result = ${functionName}(theDate[0], theDate[1], theDate[2]);\n`;
    desc += `\texpect(result).toBe(false);\n});\n`;
  });
  desc += `});\n`;
  return desc;
}

let daysCases = calculateRobustBoundaryValue(1, 31);
let monthsCases = calculateRobustBoundaryValue(1, 12);
let yearsCases = calculateRobustBoundaryValue(1812, 2012);

const product = generateCartesianProduct(daysCases, monthsCases, yearsCases);
const desc = generateTestCases(product, "solve");
console.log(desc);

saveFileToDisk();
