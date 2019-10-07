const findSum = (arrayOfNumbers, desiredValue) => {
  let found = false;
  let foundpaired;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let diff = Math.abs(arrayOfNumbers[i] - desiredValue);
    foundpaired = arrayOfNumbers.find(x => x === diff);
    if (Number.isInteger(foundpaired)) break;
  }
  found = Number.isInteger(foundpaired) ? true : false;
  return found;
};

module.exports = findSum;
