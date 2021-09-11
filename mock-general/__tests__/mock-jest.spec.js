// https://pawelgrzybek.com/mocking-functions-and-modules-with-jest/

const helpers = require("../helpers");

jest.mock("../helpers");

it("mocks entire module", () => {
  expect(helpers.add.mock).toBeTruthy();
  expect(helpers.sub.mock).toBeTruthy();
});

/*
const helpers = require("../helpers");

it("mocks entire module", () => {
  helpers.add = jest.fn();
  helpers.sub = jest.fn();

  expect(helpers.add.mock).toBeTruthy();
  expect(helpers.sub.mock).toBeTruthy();
});
*/
