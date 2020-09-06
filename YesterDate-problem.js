const {
  isValidDay,
  isValidMonth,
  isValidYear,
  isValidDayAndMonthPair,
  isLeap,
  validateFirstDayIn31,
  validateFirstDayIn30,
} = require("./DateUtil");

const months31 = [1, 3, 5, 7, 8, 10, 12];
const months30 = [4, 6, 9, 11];

function yesterDate(day, month, year) {
  // if (!isValidDay(day) || !isValidMonth(month) || !isValidYear(year)) {
  if (!isValidDayAndMonthPair(day, month) || !isValidYear(year)) {
    console.log("Invalid date.");
    return;
  }

  let yesterDay = day;
  let yesterMonth = month;
  let yesterYear = year;
  const isleap = isLeap(year);

  if (day === 1 && month === 1) {
    yesterDay = 31;
    yesterMonth = 12;
    yesterYear = year - 1;
  } else if (month == 2) {
    // [29, 2, 2012]
    if (isleap && day === 29) {
      yesterDay = day - 1;
      yesterMonth = month;
    } else if (!isleap && day === 28) {
      // [28, 2, 2010]
      yesterDay = day - 1;
      yesterMonth = month;
    } else if (day > 1 && day <= 27) {
      // [2, 2, 2012] ,  [8, 2, 2010]
      yesterDay = day - 1;
      yesterMonth = month;
    } else {
      // [1, 2, 2010]
      yesterDay = 31;
      yesterMonth = month - 1;
    }
  } else if (months31.includes(month)) {
    if (day > 1 && day <= 31) {
      yesterDay = day - 1;
    } else if (day === 1) {
      [yesterDay, yesterMonth, yesterYear] = validateFirstDayIn31(
        day,
        month,
        year
      );
    }
  } else if (months30.includes(month)) {
    if (day > 1 && day <= 30) {
      yesterDay = day - 1;
    } else if (day === 1) {
      [yesterDay, yesterMonth, yesterYear] = validateFirstDayIn30(
        day,
        month,
        year
      );
    }
  }

  return [yesterDay, yesterMonth, yesterYear];
}

module.exports = { yesterDate };

/* 
const theDate = [1, 1, 2011];
// const result = yesterDate(theDate[0], theDate[1], theDate[2]);
const [yesterDay, yesterMonth, yesterYear] = yesterDate(
  theDate[0],
  theDate[1],
  theDate[2]
);
// if (result) {
// console.log(result[0], result[1], result[2]);
console.log(yesterDay, yesterMonth, yesterYear);
// }
*/
