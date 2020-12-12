const adapters = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').map(Number).sort((a, b) => a - b);

let oneJolt = 0;
let threeJolt = 0;

for (let i = 0; i < adapters.length; i++) {
  const current = adapters[i];
  const prev = i && adapters[i - 1];

  if (current - prev === 1) oneJolt++;
  if (current - prev === 3) threeJolt++;
}

console.log('Got result:', oneJolt * (threeJolt + 1));
