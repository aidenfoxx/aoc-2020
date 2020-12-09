const targetExists = (data, target) => {
  const comparators = [...data].slice(0, 25);

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
  while (data) {
    if (data.length < 26) {
      return false;
    }

    const target = Number(data[25]);

    if (!targetExists(data, target)) {
      return target;
    }

    data.shift();
  }
};

const data = require('fs').readFileSync('data.txt', 'utf8').split('\n');

console.log('Got invalid target:', getInvalidTarget(data));
