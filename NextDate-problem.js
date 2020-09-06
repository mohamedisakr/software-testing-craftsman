const {
  isValidMonth,
  isValidYear,
  isLeap,
  isValidDayAndMonthPair,
  months31,
  months30,
} = require("./DateUtil");

let tomorrowDay = 0;
let tomorrowMonth = 0;
let tomorrowYear = 0;
let isleap = false;

function isAllValid() {
  return (
    !isValidDayAndMonthPair(day, month) ||
    !isValidMonth(month) ||
    !isValidYear(year)
  );
}

function is31Month(month) {
  return months31.includes(month);
}

function is30Month(month) {
  return months30.includes(month);
}

function updateWhenMonthIs2(isleap, day, month) {
  if (isleap) {
    // 3,2,2008
    if (day < 29) {
      tomorrowDay = day + 1;
    } else {
      // 29,2,2008
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    }
  } else {
    if (day < 28) {
      // 3,2,2003
      tomorrowDay = day + 1;
    } else {
      // 28,2,2003
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    }
  }
}

function updateWhenMonthIs12(day, year) {
  if (day < 31) {
    // 4,12,2007
    tomorrowDay = day + 1;
  } else {
    // 31,12,1999
    tomorrowDay = 1;
    tomorrowMonth = 1;
    tomorrowYear = year + 1;
  }
}

function updateWhen30(day, month) {
  if (day < 30) {
    // 14,4,2008
    tomorrowDay = day + 1;
  } else {
    // 30,9,2001
    //if (day === 30) {
    tomorrowDay = 1;
    tomorrowMonth = month + 1;
  }
  // return { tomorrowDay, tomorrowMonth };
}

function updateWhen31(day, month) {
  if (day < 31) {
    // 20,7,2002
    tomorrowDay = day + 1;
  } else {
    // 31,10,2009
    tomorrowDay = 1;
    tomorrowMonth = month + 1;
  }
  // return { tomorrowDay, tomorrowMonth };
}

/**
 * Get  the date of the day after the input date
 * @param {*} day the day of the input date
 * @param {*} month the month of the input date
 * @param {*} year the year of the input date
 */
function nextDate(day, month, year) {
  if (isAllValid()) {
    console.log("Invalid date.");
    return null;
  }

  tomorrowDay = day;
  tomorrowMonth = month;
  tomorrowYear = year;
  isleap = isLeap(year);

  if (is31Month(month)) {
    // ({ tomorrowDay, tomorrowMonth } = getDayAndMonthWhen31(day, month));
    updateWhen31(day, month);
  } else if (is30Month()) {
    // ({ tomorrowDay, tomorrowMonth } = getDayAndMonthWhen30(day, month));
    updateWhen30(day, month);
  } else if (month === 12) {
    updateWhenMonthIs12(day, year);
  } else if (month === 2) {
    updateWhenMonthIs2(isleap, day, month);
  }
  const result = [tomorrowDay, tomorrowMonth, tomorrowYear];
  return result;
}

module.exports = {
  nextDate,
  isAllValid,
  is31Month,
  is30Month,
  updateWhenMonthIs2,
  updateWhenMonthIs12,
  updateWhen30,
  updateWhen31,
};

// const result = nextDate(1, 1, 2010);
// console.log(`${result[0]}-${result[1]}-${result[2]}`);

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
// if(months31.includes(month)){console.log(`Month ${month} is 31 days.`);}
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
