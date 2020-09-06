const months31 = [1, 3, 5, 7, 8, 10, 12];
const months30 = [4, 6, 9, 11];

function isValidMonth(month) {
  if (month >= 1 && month <= 12) {
    return true;
  }
  return false;
}

function isValidDayAndMonthPair(day, month, year) {
  if (!isValidMonth(month) || !isValidYear(year)) {
    return false;
  }

  const isleap = isLeap(year);

  if (months31.includes(month) && day >= 1 && day <= 31) {
    return true;
  } else if (months30.includes(month) && day >= 1 && day <= 30) {
    return true;
  } else if (isleap && month === 2) {
    // consider february 28 or 29
    return day >= 1 && day <= 29;
  } else if (!isleap && month === 2) {
    return day >= 1 && day <= 28;
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

function validateFirstDayIn31(day, month, year) {
  if (!isValidDay(day) || !isValidMonth(month) || !isValidYear(year)) {
    console.log("Invalid date.");
    return;
  }

  let yesterDay = day;
  let yesterMonth = month;
  let yesterYear = year;
  const isleap = isLeap(year);

  if (month === 1) {
    yesterDay = 31;
    yesterMonth = 12;
    yesterYear = year - 1;
  } else if (month === 3) {
    if (isleap) {
      yesterDay = 29;
      yesterMonth = month - 1;
      yesterYear = year;
    } else {
      yesterDay = 28;
      yesterMonth = month - 1;
      yesterYear = year;
    }
  } else if (month === 5) {
    yesterDay = 30;
    yesterMonth = month - 1;
    yesterYear = year;
  } else if (month === 7) {
    yesterDay = 30;
    yesterMonth = month - 1;
    yesterYear = year;
  } else if (month === 8) {
    yesterDay = 31;
    yesterMonth = month - 1;
    yesterYear = year;
  } else if (month === 10) {
    yesterDay = 30;
    yesterMonth = month - 1;
    yesterYear = year;
  } else if (month === 12) {
    yesterDay = 30;
    yesterMonth = month - 1;
    yesterYear = year;
  }

  return [yesterDay, yesterMonth, yesterYear];
}

function validateFirstDayIn30(day, month, year) {
  if (!isValidDay(day) || !isValidMonth(month) || !isValidYear(year)) {
    console.log("Invalid date.");
    return;
  }

  let yesterDay = day;
  let yesterMonth = month;
  let yesterYear = year;

  if (month === 4) {
    yesterDay = 31;
    yesterMonth = month - 1;
    yesterYear = year;
  } else if (month === 6) {
    yesterDay = 31;
    yesterMonth = month - 1;
    yesterYear = year;
  } else if (month === 9) {
    yesterDay = 31;
    yesterMonth = month - 1;
    yesterYear = year;
  } else if (month === 11) {
    yesterDay = 31;
    yesterMonth = month - 1;
    yesterYear = year;
  }

  return [yesterDay, yesterMonth, yesterYear];
}

module.exports = {
  isValidMonth,
  isValidDayAndMonthPair,
  isValidYear,
  isLeap,
  validateFirstDayIn31,
  validateFirstDayIn30,
};
/*
function isValidDay(day) {
  if (day >= 1 && day <= 31) {
    return true;
  }
  return false;
}
*/
