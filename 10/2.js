const adapters = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').map(Number).sort((a, b) => a - b);

let joltCount = 0;
let joltSequences = [0, 0, 0 ,0, 0];

for (let i = 0; i < adapters.length; i++) {
  const current = adapters[i];
  const prev = i && adapters[i - 1];

  if (current - prev === 1) joltCount++;
  if (current - prev === 3) {
    joltSequences[joltCount]++;
    joltCount = 0;
  }
}

joltSequences[joltCount]++;

console.log('Max combinations:', Math.pow(2, joltSequences[2]) * Math.pow(4, joltSequences[3]) * Math.pow(7, joltSequences[4]));
