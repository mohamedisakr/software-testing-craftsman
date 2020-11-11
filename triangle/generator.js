const { testData } = require("./data");

let generatedTests = `describe("14 test cases The Art of Software Testing 2011 pp. 2", () => {`;
testData.forEach((item) => {
  let { id, args, desc, expected } = item;
  generatedTests += `
        //     
        test("${id} ${desc}", () => {                  
            expect(solve(${args})).toBe(${expected});
        });
    `;
});

generatedTests += `});`;
console.log(generatedTests);
