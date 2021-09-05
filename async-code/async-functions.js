function addCallback(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 1000);
}

function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a + b;
      resolve(result);
    }, 5000);
  });
}

module.exports = { addCallback, addPromise };
