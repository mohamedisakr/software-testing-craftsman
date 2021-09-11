// https://pawelgrzybek.com/mocking-functions-and-modules-with-jest/

it("returns undefined and has been called correct number of times", () => {
  const sum = jest.fn((p1, p2) => p1 + p2);
  const result = sum(1, 2);
  // console.log(typeof sum);

  expect(sum).not.toBeUndefined();

  expect(sum).toHaveBeenCalledTimes(1);
  expect(sum).toHaveBeenCalledWith(1, 2);
});

it("has been called with correct arguments and returns a correct value", () => {
  const func = jest
    .fn()
    .mockReturnValueOnce("first return")
    .mockReturnValueOnce("second return");

  const resultFirst = func("first call");
  const resultSecond = func("second call");

  expect(resultFirst).toBe("first return");
  expect(resultSecond).toBe("second return");
  expect(func).toHaveBeenCalledTimes(2);
  expect(func).toHaveBeenNthCalledWith(1, "first call");
  expect(func).toHaveBeenNthCalledWith(2, "second call");
});
