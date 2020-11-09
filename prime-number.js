function isPrime(n) {
  // 0 => 1000
  if (n < 0 || n > 1000) {
    throw new Error("The number should be in range from 0 to 1000");
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
  return true;
}

module.exports = { isPrime };
