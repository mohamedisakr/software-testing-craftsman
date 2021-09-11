const thumbWar = require("../thumb-war");
// const { getWinner } = require("../utils");
// const utils = require("../utils");

test("returns winner", () => {
  //   const originalGetWinner = utils.getWinner; // getWinner;
  const getWinner = (p1, p2) => p2;
  //   utils.getWinner = (p1, p2) => p2;
  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  //   getWinner = originalGetWinner;
  //   utils.getWinner = originalGetWinner;
});
