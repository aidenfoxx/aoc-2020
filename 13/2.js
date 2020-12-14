const data = require('fs').readFileSync('data.txt', 'utf8').split('\n');
const buses = data[1].split(',').map((id, offset) => id !== 'x' ? [Number(id), offset] : null).filter(Boolean).sort((a, b) => b[0] - a[0]);
let comparisonTime = buses[0][0] * (Number(process.argv[3]) || 1) - buses[0][1]; // NOTE: argv[1] = Thread offset

/**
 * Should be solved with chinese remainder
 * theorem. Oh well...
 */
do {
  if (!buses.find((bus) => (comparisonTime + bus[1]) % bus[0] !== 0)) {
    console.log('First valid time:', comparisonTime);
    break;
  }
} while (comparisonTime += buses[0][0] * (Number(process.argv[2]) || 1)); // NOTE: argv[0] = Number of threads
