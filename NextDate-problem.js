const days31 = [1, 3, 5, 7, 8, 10];
const days30 = [4, 6, 9, 11]; 

// message: “Invalid Input Date.”
function isValidDay(day){
    if(day >= 1 && day <= 31){
        return true;
    }
    return false;
}

function isValidMonth(month) {
    if(month >= 1 && month <= 12){
        return true;
    }
    return false;
}

function isValidYear(year) {
    if(year >= 1812 && year <= 2012){
        return true;
    }
    return false;
}
/*
if ((year % 4 == 0) and (year % 100 != 0)) or (year % 400) == 0:
        return True
    else:
        return False
*/
function isLeap(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

function nextDate(day, month, year) {
    if(!isValidDay(day)){
        console.log('Invalid date.');
        return;
    }

    if(!isValidMonth(month)) {
         console.log('Invalid date.');
        return;
    }

    if(!isValidYear(year)) {
        console.log('Invalid date.');
        return;
    }
}

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

