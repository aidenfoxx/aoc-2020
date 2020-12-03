/**
 * Let's play golf!
 */
const data = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n');
const calcTrees = (x, y) => data.reduce((acc, line, index) => index % y === 0 && line[(index / y * x) % line.trim().length] === '#' ? acc + 1 : acc, 0);
console.log('Trees:', calcTrees(1, 1) * calcTrees(3, 1) * calcTrees(5, 1) * calcTrees(7, 1) * calcTrees(1, 2));
