const targetExists = (data, target) => {
  const comparators = data.slice(0, 25);

  for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 25; y++) {
      const left = Number(comparators[x]);
      const right = Number(comparators[y]);

      if (x !== y && left + right === target) {
        return true;
      }
    }
  }
  return false;
};

const getInvalidTarget = (data) => {
  const temp = [...data];

  while (temp) {
    if (temp.length < 26) {
      return false;
    }

    const target = Number(temp[25]);

    if (!targetExists(temp, target)) {
      return target;
    }

    temp.shift();
  }
};

const calculateSum = (data, target, maxDepth = 20) => {
  let depth = 2;

  while (depth < maxDepth) {
    for (let i = 0; i < data.length; i++) {
      if (i + depth  > data.length) {
        break;
      }

      const sumData = data.slice(i, i + depth);
      const comparison = sumData.reduce((acc, val) => acc + Number(val), 0);

      if (target === comparison) {
        return Math.min(...sumData) + Math.max(...sumData);
      }
    }
    depth++;
  }

  return false;
};

const data = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n');

console.log('Got sum:', calculateSum(data, getInvalidTarget(data)));
