const {
  isValidDay,
  isValidMonth,
  isValidYear,
  isLeap,
  isValidDayAndMonthPair,
  validateFirstDayIn31,
  validateFirstDayIn30,
} = require("./DateUtil");

const days31 = [1, 3, 5, 7, 8, 10];
const days30 = [4, 6, 9, 11];

/**
 * Get  the date of the day after the input date
 * @param {*} day the day of the input date
 * @param {*} month the month of the input date
 * @param {*} year the year of the input date
 */
function nextDate(day, month, year) {
  if (!isValidDayAndMonthPair(day, month)) {
    console.log("Invalid date.");
    return null;
  }

  if (!isValidYear(year)) {
    console.log("Invalid date.");
    return null;
  }

  console.log("UNREACHABLE CODE");

  const isLeapYear = isLeap(year);
  let tomorrowDay = 0;
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
    if (isLeapYear) {
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

  return [tomorrowDay, tomorrowMonth, tomorrowYear];
}

module.exports = { nextDate };

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

/*
function isValidDay(day) {
  if (day >= 1 && day <= 31) {
    return true;
  }
  return false;
}

function isValidMonth(month) {
  if (month >= 1 && month <= 12) {
    return true;
  }
  return false;
}

function isValidYear(year) {
  if (year >= 1812 && year <= 2012) {
    return true;
  }
  return false;
}

function isLeap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
*/
