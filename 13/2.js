const data = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n')[1].split(',');
const buses = data.map((id, offset) => id !== 'x' ? [Number(id), offset] : null).filter(Boolean).sort((a, b) => b[0] - a[0]);
const offset = Number(data[0]);
let index = 1054358952569; // NOTE: Specific to my data

/**
 * Should be solved with chinese remainder
 * theorem. Oh well...
 */
do {
  const comparisonTime = index * buses[0][0] - buses[0][1];
  const success = !buses.find((bus) => (comparisonTime + bus[1]) % bus[0] !== 0);

  if (success) {
    console.log('First valid time:', comparisonTime);
    break;
  }
} while (index += offset);
