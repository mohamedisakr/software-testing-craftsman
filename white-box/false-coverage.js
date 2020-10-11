// using compact statement
function isValidLength(field) {
  return field.length >= 8;
}

// using branch if statement
// function isValidLength(field) {
//   if (field.length >= 8) {
//     return true;
//   }
//   return false;
// }

module.exports = { isValidLength };
