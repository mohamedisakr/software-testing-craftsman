const lockUnitPrice = 45;
const stockUnitPrice = 30;
const barrelUnitPrice = 25;

// validation 
/* 
    1 <= locks <= 70
    1 <= stocks <= 80
    1 <= barrels <= 90
*/

function validMaxLocks(locks) {
    if(locks >= 1 && locks <= 70) {
        return true;
    }
    return false;
}

function validMaxStocks(stocks) {
    if(stocks >= 1 && stocks <= 80) {
        return true;
    }
    return false;
}

function validMaxBarrels(barrels) {
    if(barrels >= 1 && barrels <= 90) {
        return true;
    }
    return false;
}

// const locks = [0, 1, 2, 69, 70, 71];
// locks.forEach(lock=>console.log(validMaxLocks(lock)));

// const stocks = [0, 1, 2, 79, 80, 81];
// stocks.forEach(stock=>console.log(validMaxStocks(stock)));

// const barrels = [0, 1, 2, 89, 90, 91];
// barrels.forEach(barrel=>console.log(validMaxBarrels(barrel)));
