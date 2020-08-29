const lockUnitPrice = 45;
const stockUnitPrice = 30;
const barrelUnitPrice = 25;


/* // validation 
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

/* 
    10% on sales up to (and including) $1000, 
    15% on the next $800, 
    20% on any sales in excess of $1800.
*/
function computeCommission(amount) {    
    let commission = 0.0;
  
   if(amount > 1800) {
       commission = (1000 * 0.1);
       commission += (800 * 0.15); 
       commission += (amount - 1000) * 0.2;
   } else if (commission > 1000) { 
        commission = (1000 * 0.1);
       commission += (amount - 1000)  * 0.15;
   } else {
       commission = amount * 0.1;
   }
   return commission
}

function computeSales(locks, stocks, barrels) {
    const lockSales = lockUnitPrice  * locks;
    const stockSales = stockUnitPrice * stocks;
    const barrelSales = barrelUnitPrice * barrels
    return lockSales + stockSales + barrelSales;
}

const amounts = [700, 1000, 1790, 1800, 2000];
//              [70,  100,  179,  180,  420]
amounts.forEach(amount=>console.log(computeCommission(amount)))

/*
// const locks = [0, 1, 2, 69, 70, 71];
// locks.forEach(lock=>console.log(validMaxLocks(lock)));

// const stocks = [0, 1, 2, 79, 80, 81];
// stocks.forEach(stock=>console.log(validMaxStocks(stock)));

// const barrels = [0, 1, 2, 89, 90, 91];
// barrels.forEach(barrel=>console.log(validMaxBarrels(barrel)));
*/