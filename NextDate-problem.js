/*
    c1. 1 ≤ day ≤ 31
    c2. 1 ≤ month ≤ 12    
    c3. 1812 ≤ year ≤ 2012
*/

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

// const days = [-1, 0, 1, 2, 30, 31, 32];
// days.forEach(day=>console.log(isValidDay(day)));

// const months = [-1, 0, 1, 2, 11, 12, 13];
// months.forEach(month=>console.log(isValidMonth(month)));

const years = [1811, 1812, 1813, 2011, 2012, 2013];
years.forEach(year=>console.log(isValidYear(year)));

