const thumbWar = require("../thumb-war");
// const { getWinner } = require("../utils");
// const utils = require("../utils");

test("returns winner", () => {
  const getWinner = (...args) => {
    getWinner.mock.calls.push(args);
    return args[1];
  };

  getWinner.mock = { calls: [] };

  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  expect(getWinner.mock.calls).toHaveLength(2);
  getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
  });
});
