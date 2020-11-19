function main(a) {
  //   let a = 0;
  let b = 0;

  if (a < 10 || a > 100) {
    b += 10;
  } else if (a === 20) {
    b += 20;
  } else if (a === 30) {
    b += 30;
  } else {
    b += 40;
  }
  return b;
}

module.exports = { main };
