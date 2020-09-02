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

const days31 = [1, 3, 5, 7, 8, 10];
const days30 = [4, 6, 9, 11];

function yesterDate(day, month, year) {
  if (!isValidDay(day) || !isValidMonth(month) || !isValidYear(year)) {
    console.log("Invalid date.");
    return;
  }
}
