// https://pawelgrzybek.com/mocking-functions-and-modules-with-jest/
const helpers = require("../helpers");

it("returns correct result", () => {
  const addMock = jest.spyOn(helpers, "add");
  const result = addMock(1, 2);

  // look, in contrast to jest.fn() that returns undefined by default
  // jest.spyOn() calls original implementation
  expect(result).toBe(3);
});

it("returns mocked and original result", () => {
  const addMock = jest.spyOn(helpers, "add");
  //   addMock.mockImplementation(() => 4);
  addMock.mockImplementation((a, b) => a * b);

  // redefined implementation
  expect(helpers.add(2, 5)).toBe(10);

  addMock.mockRestore();

  // original implementation
  expect(helpers.add(1, 2)).toBe(3);
});
