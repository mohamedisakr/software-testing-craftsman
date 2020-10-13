async function add(x, y) {
  return (await x) + y;
}

async function gcd(x, y) {
  while (x !== y) {
    if (x > y) {
      x -= y;
      //   x /= y;
    } else {
      y -= x;
      //   y /= x;
    }
  }
  return await x;
}

module.exports = { add, gcd };
