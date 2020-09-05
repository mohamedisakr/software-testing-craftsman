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

module.exports = { isValidDay, isValidMonth, isValidYear, isLeap };
