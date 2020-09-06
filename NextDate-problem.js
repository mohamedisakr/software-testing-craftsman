const {
  isValidMonth,
  isValidYear,
  isLeap,
  isValidDayAndMonthPair,
  validateFirstDayIn31,
  validateFirstDayIn30,
  days31,
  days30,
} = require("./DateUtil");

/**
 * Get  the date of the day after the input date
 * @param {*} day the day of the input date
 * @param {*} month the month of the input date
 * @param {*} year the year of the input date
 */
function nextDate(day, month, year) {
  if (
    !isValidDayAndMonthPair(day, month) ||
    !isValidMonth(month) ||
    !isValidYear(year)
  ) {
    console.log("Invalid date.");
    return null;
  }

  // if (!isValidDayAndMonthPair(day, month)) {
  //   console.log("Invalid date.");
  //   return null;
  // }

  // console.log("UNREACHABLE CODE");

  const isleap = isLeap(year);
  let tomorrowDay = day;
  let tomorrowMonth = month;
  let tomorrowYear = year;

  if (days31.includes(month)) {
    if (day < 31) {
      tomorrowDay = day + 1;
    } else {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    }
  } else if (days30.includes(month)) {
    if (day < 30) {
      tomorrowDay = day + 1;
    } else if (day === 30) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    }
  } else if (month === 12) {
    if (day < 31) {
      tomorrowDay = day + 1;
    } else {
      tomorrowDay = 1;
      tomorrowMonth = 1;
      tomorrowYear = year + 1;
    }
  } else if (month === 2) {
    if (isleap) {
      if (day < 29) {
        tomorrowDay = day + 1;
      } else {
        tomorrowDay = 1;
        tomorrowMonth = month + 1;
      }
    } else {
      if (day < 28) {
        tomorrowDay = day + 1;
      } else {
        tomorrowDay = 1;
        tomorrowMonth = month + 1;
      }
    }
  }
  const result = [tomorrowDay, tomorrowMonth, tomorrowYear];
  return result;
}

module.exports = { nextDate };

const result = nextDate(1, 1, 2010);
console.log(`${result[0]}-${result[1]}-${result[2]}`);

/*
//[tomorrowDay, tomorrowMonth, tomorrowYear] =
const theDate = [31, 6, 1812];
// const result = nextDate(theDate[0], theDate[1], theDate[2]);
const [tomorrowDay, tomorrowMonth, tomorrowYear] = nextDate(
  theDate[0],
  theDate[1],
  theDate[2]
);

if (tomorrowDay && tomorrowMonth && tomorrowYear) {
  console.log(`${tomorrowDay}-${tomorrowMonth}-${tomorrowYear}`);
}
*/
// if (result) {
// console.log(`${result[0]}-${result[1]}-${result[2]}`);
// }

/*
const theDate = [31, 12, 2004]; // [31, 1, 2011]; // [29, 2, 2004];
const [tomorrowDay, tomorrowMonth, tomorrowYear] = nextDate(
  theDate[0],
  theDate[1],
  theDate[2]
);
console.log(`${tomorrowDay}-${tomorrowMonth}-${tomorrowYear}`);
*/

/*
// const days = [-1, 0, 1, 2, 30, 31, 32];
// days.forEach(day=>console.log(isValidDay(day)));

// const months = [-1, 0, 1, 2, 11, 12, 13];
// months.forEach(month=>console.log(isValidMonth(month)));

// const years = [1811, 1812, 1813, 2011, 2012, 2013];
// years.forEach(year=>console.log(isValidYear(year)));

// const leaps = [1600, 1992, 1996, 2000, 2004, 1700, 1800, 1900];
// leaps.forEach(year=>console.log(isLeap(year)));

// let month = 4;
// if(days31.includes(month)){console.log(`Month ${month} is 31 days.`);}
// else {console.log(`Month ${month} is NOT 31 days.`);}

//   if(!isValidMonth(month)) {
//          console.log('Invalid date.');
//         return;
//     }

//     if(!isValidYear(year)) {
//         console.log('Invalid date.');
//         return;
//     }
*/

// =============================
