// equivalence classes

const P1 = {
  desc: "char1 is 1 digit number from 0 to 9",
  equivClass: "1",
  val: "2",
};
const P2 = {
  desc: "char1 is Latin upper-case letter",
  equivClass: "2",
  val: "N",
};
const P3 = {
  desc: "char1 is Cyrillic upper-case letter",
  equivClass: "3",
  val: "Ф",
};
const P4 = {
  desc: "char1 is Greek upper-case letter",
  equivClass: "4",
  val: "Σ",
};
const P5 = { desc: "char1 is blank value", equivClass: "4", val: "" };
const P6 = { desc: "char1 is special letter", equivClass: "6", val: "#" };
const P7 = {
  desc: "char1 is Latin lower-case letter",
  equivClass: "7",
  val: "n",
};
const P8 = {
  desc: "char1 is Cyrillic lower-case letter",
  equivClass: "8",
  val: "ф",
};
const P9 = {
  desc: "char1 is Greek lower-case letter",
  equivClass: "9",
  val: "σ",
};
const P10 = {
  desc: "char1 is more than 1 digit number",
  equivClass: "10",
  val: "22",
};
const P11 = { desc: "char1 is negative number", equivClass: "11", val: "-1" };
const P12 = {
  desc: "char1 is other languages letter",
  equivClass: "2",
  val: "م",
}; // for example Arabic letters

//*********************************************************************************** */

const Q1 = {
  desc: "char2 is 1 digit number from 0 to 9",
  equivClass: "1",
  val: "7",
};
const Q2 = {
  desc: "char2 is Latin upper-case letter",
  equivClass: "2",
  val: "M",
};
const Q3 = {
  desc: "char2 is Cyrillic upper-case letter",
  equivClass: "3",
  val: "Я",
};
const Q4 = {
  desc: "char2 is Greek upper-case letter",
  equivClass: "4",
  val: "Ω",
};
const Q5 = { desc: "char2 is blank value", equivClass: "4", val: "" };
const Q6 = { desc: "char2 is special letter", equivClass: "6", val: "&" };
const Q7 = {
  desc: "char2 is Latin lower-case letter",
  equivClass: "7",
  val: "m",
};
const Q8 = {
  desc: "char2 is Cyrillic lower-case letter",
  equivClass: "8",
  val: "я",
};
const Q9 = {
  desc: "char2 is Greek lower-case letter",
  equivClass: "9",
  val: "ω",
};
const Q10 = {
  desc: "char2 is more than 1 digit number",
  equivClass: "10",
  val: "77",
};
const Q11 = { desc: "char2 is negative number", equivClass: "11", val: "-5" };
const Q12 = {
  desc: "char2 is other languages letter",
  equivClass: "2",
  val: "د",
};

// arrays
const ps = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12];
const qs = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12];

// equivalence classes
const checkInvalidEquivalenceClass = (arr1, arr2) => {
  if (
    parseInt(arr1.equivClass) === 5 ||
    parseInt(arr1.equivClass) === 6 ||
    parseInt(arr1.equivClass) === 7 ||
    parseInt(arr1.equivClass) === 8 ||
    parseInt(arr1.equivClass) === 9 ||
    parseInt(arr1.equivClass) === 10 ||
    parseInt(arr1.equivClass) === 11 ||
    parseInt(arr1.equivClass) === 12 ||
    parseInt(arr2.equivClass) === 5 ||
    parseInt(arr2.equivClass) === 6 ||
    parseInt(arr2.equivClass) === 7 ||
    parseInt(arr2.equivClass) === 8 ||
    parseInt(arr2.equivClass) === 9 ||
    parseInt(arr2.equivClass) === 10 ||
    parseInt(arr2.equivClass) === 11 ||
    parseInt(arr2.equivClass) === 12
  ) {
    return 0;
  }
  return 1;
};

const cartesianProduct = (arr1, arr2) => {
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // const Q11 = { desc: "char2 is negative number", equivClass: "11", val: "-1" };
      let testCase = {
        testCaseDesc: `${arr1[i].desc} and ${arr2[j].desc}`,
        char1: arr1[i].val,
        char2: arr2[j].val,
        result: checkInvalidEquivalenceClass(arr1[i], arr2[j]),
      };
      //   res.push([arr1[i]].concat(arr2[j]));
      res.push(testCase);
    }
  }
  return res;
};

const allCombinations = cartesianProduct(ps, qs);
// allCombinations.forEach((item) => console.log(item));
// const zeros = allCombinations.filter((item) => item.result === 0);
// console.log(`# zeros : ${zeros.length}`);
console.log(allCombinations.length);

// generate table
// TC# | Description | char1 | char2 | Result
let table = `<table>
<thead>
  <tr>
    <th>TC#</th>
    <th>Description</th>
    <th>char1</th>
    <th>char2</th>
    <th>Result</th>
  </tr>
</thead>
<tbody>`;
allCombinations.forEach((item, index) => {
  let { testCaseDesc, char1, char2, result } = item;
  table += `<tr>`;
  table += `<td>${index + 1}</td>`;
  table += `<td>${testCaseDesc}</td>`;
  table += `<td>${char1}</td>`;
  table += `<td>${char2}</td>`;
  table += `<td>${result}</td>`;
  table += `</tr>`;
});
table += `</tbody></table>`;
console.log(table);

// const cartesianProduct = (...arr) => {
//   return arr.reduce(
//     (acc, val) => {
//       return acc
//         .map((el) => {
//           return val.map((element) => {
//             return el.concat([element]);
//           });
//         })
//         .reduce((acc, val) => acc.concat(val), []);
//     },
//     [[]]
//   );
// };

// function cartesianProduct(...arrays) {
//   return arrays.reduce(
//     (a, b) =>
//       a.map((x) => b.map((y) => x.concat(y))).reduce((a, b) => a.concat(b), []),
//     [[]]
//   );
// }

/*
{testCaseDesc, char1, char2, result}

it('test case description', () => {
  let char1 = 0 
  let char2 = 'A'
  let result = genCode(char1, char2)
})
*/
