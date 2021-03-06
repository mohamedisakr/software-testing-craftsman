function isPrime(n) {
  // 0 => 1000
  const errorMessage =
    "The number should be integer, within range from 0 to 1000";

  if (n < 0 || n > 1000) {
    throw new RangeError(errorMessage);
  }

  if (!Number.isInteger(n)) {
    throw new TypeError(errorMessage);
  }

  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  if (n === 2 || n % 2 === 0) {
    return false;
  }

  const sqrRoot = Math.sqrt(n) + 1;
  for (let i = 3; i <= sqrRoot; i = i + 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = { isPrime };
