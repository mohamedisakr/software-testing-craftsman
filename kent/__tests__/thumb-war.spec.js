const thumbWar = require("../thumb-war");
const utils = require("../utils");
const utilsMock = require("../utils");

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p2),
  };
});

test("returns winner", () => {
  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  expect(utilsMock.getWinner).toBeCalledTimes(2);
  utilsMock.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
  });
});
