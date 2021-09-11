// let getWinner = (player1, player2) => {
const utils = {
  getWinner(player1, player2) {
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      return player1;
    } else {
      return player2;
    }
  },
};
module.exports = utils;
// console.log(getWinner("tamil", "samsoom"));
