// https://www.pluralsight.com/guides/test-asynchronous-code-jest
const { addCallback, addPromise } = require("../async-functions");

it("should test add function using callback function", (done) => {
  expect.assertions(1);
  addCallback(1, 2, (result) => {
    expect(result).toBe(3);
    done();
  });
});

it("should test add function using promise", async () => {
  expect.assertions(1);
  return expect(addPromise(1, 2)).resolves.toBe(3);
}, 10000);

it("should test add function using async/await", async () => {
  expect.assertions(1);
  const result = await addPromise(1, 2);
  expect(result).toBe(3);
}, 10000);

test.skip("this shouldn't pass", () => {
  //   expect.assertions(1);
  expect.hasAssertions();
  setTimeout(() => {
    // this should fail:
    expect(false).toBe(true);
  });
});
