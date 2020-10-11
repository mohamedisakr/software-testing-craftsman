function gcd(x, y) {
  while (x !== y) {
    if (x > y) {
      x -= y;
      //   x /= y;
    } else {
      y -= x;
      //   y /= x;
    }
  }
  return x;
}
module.exports = { gcd };
