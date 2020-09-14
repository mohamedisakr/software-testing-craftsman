// 4690358213754657
function getWithoutCheckDigit(creditCard) {
  return creditCard.slice(0, creditCard.length - 1);
}

function multiplyby2(number) {
  return number * 2;
}

function addDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}

function sumAll(number) {
  let sum = 0;
  while (number > 0) {
    let num = number % 10;
    let mul = multiplyby2(num);
    let ad = 0;

    if (mul > 9) {
      ad = addDigits(mul);
    } else {
      ad = mul;
    }

    sum += ad;
    number = parseInt(number / 10);
  }
  return sum;
}

function verifyCheckDigit(num) {
  let last = num % 10;
  if (last === 0) {
    return 0;
  } else {
    return 10 - last;
  }
}

// let creditCard = 469035821375465;
// 4 6 9 0 3 5 8 2 1 3 7 5 4 6 5
// console.log(parseInt(creditCard));

let creditCard = 469035821375465;
const theSum = sumAll(creditCard);
console.log(theSum);
console.log();

const last = verifyCheckDigit(theSum);
console.log(last);

// let creditCard = "469035821375465";
// const theSum = sumAll(creditCard);
// console.log(theSum);

// console.log(4690358213754657 % 10);
// console.log(parseInt("4690358213754657"));

// let creditCard = "4690358213754657";
// let result = getWithoutCheckDigit(creditCard);
// console.log(result);

// let number = "8";
// let result = multiplyby2(number);
// console.log(result);

// let number = "1234";
// let result = addDigits(number);
// console.log(result);

// let number = "469035821375465";
// let doub = multiplyby2(number);
// let result = addDigits(doub);
// console.log(result);

//

// console.log(1234 % 10);

// let n = 1234;
// n = parseInt(n / 10);
// console.log(n);

// let n = 1234;
// console.log(addDigits(n));

// let num = 1234;

// let sum = 0;
// while (creditCard > 0) {
//   let digit = creditCard % 10;
//   let mul = digit * 2;
//   let add = 0;
//   while (mul > 0) {
//     add += mul % 10;
//     mul = parseInt(mul / 10);
//   }
//   sum += add;
//   creditCard = parseInt(creditCard / 10);
//   console.log(creditCard);
// }
// console.log(sum);
