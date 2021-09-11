const thumbWar = require("../thumb-war");
// const { getWinner } = require("../utils");
// const utils = require("../utils");

test("returns winner", () => {
  const getWinner = jest.fn((p1, p2) => p2);

  getWinner.mock = { calls: [] };

  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  // expect(winner).toBe("Kent C. Dodds");
  expect(getWinner).toBeCalledTimes(2);

  expect(getWinner).nthCalledWith(1, "Ken Wheeler");
  expect(getWinner).nthCalledWith(2, "Kent C. Dodds");
});

// getWinner.mock.calls.forEach((args) => {
//   expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
// });
