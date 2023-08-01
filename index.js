const getRatio = require("../ratio");
const getFactorial = require("../factorial");
function calculateRatioAndFactorial(num1, num2, num3) {
  const ratio = getRatio(num1, num2);
  const factorial = getFactorial(num3);
  return { ratio, factorial };
}
module.exports = calculateRatioAndFactorial;
