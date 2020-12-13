const data = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n');
const currentTime = Number(data[0]);
const closestBus = data[1].split(',').map((id) => id !== 'x' ? [Number(id), currentTime - (currentTime % Number(id)) + Number(id)] : null).filter(Boolean).sort((a, b) => a[1] - b[1])[0];

console.log('Closest bus:', closestBus[0] * (closestBus[1] - currentTime));
