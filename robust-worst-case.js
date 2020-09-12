// involves the Cartesian product of the seven-element sets we used
// in robustness testing resulting in 7^n test cases.
const fs = require("fs");
const util = require("util");

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

function generateTestCases(product, functionName) {
  // let desc = `describe("test ${functionName} function", () => {`;
  // product.forEach((value, index) => {
  //   desc += ` ${value}`; //${index},
  //   // console.log(value); //, index
  // });

  let desc = `describe("test ${functionName} function", () => {`;
  product.forEach((val, index) => {
    // val.forEach((item) => {
    // let arr = Array.from(val);
    desc += `\nit(case ${index + 1}, () => {\n`; // ` ${item}`; //${index},
    desc += `\tconst theDate = [${val}]\n`; // [31, 6, 2000];
    desc += `\tconst result = (theDate[0], theDate[1], theDate[2]);\n`; //${functionName}
    desc += `\texpect(result).toBe(false);\n});`;
    // console.log(item);
    // });
  });
  return desc;
}

// /*
let daysCases = generateRobustBoundaryValue(1, 31);
// console.log(daysCases);

let monthsCases = generateRobustBoundaryValue(1, 12);
// console.log(monthsCases);

let yearsCases = generateRobustBoundaryValue(1812, 2012);
// console.log(yearsCases);

const product = generateProduct(daysCases, monthsCases, yearsCases);
const desc = generateTestCases(product, "checkTriangle"); //["totat", "coti", "mohamed", "mariam"]
console.log(desc);
// console.log(product);

/*
let desc = `describe("test function", () => {`; //${functionName}

product.forEach((val, index) => {
  // val.forEach((item) => {
  let arr = Array.from(val);
  desc += `\nit(case ${index + 1}, () => {\n`; // ` ${item}`; //${index},
  desc += `\tconst theDate = ${arr}\n`; // [31, 6, 2000];
  desc += `\tconst result = (theDate[0], theDate[1], theDate[2]);\n`; //${functionName}
  desc += `\texpect(result).toBe(false);\n});`;
  // console.log(item);
  // });
});

console.log(desc);
*/

const writeFile = util.promisify(fs.writeFile);
fn = async () => {
  await writeFile("foo.txt", "this is a test file.");
};

// fn();
// */
