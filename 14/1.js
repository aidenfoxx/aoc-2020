const MAX_INT = 0x40000;

let positiveMask;
let negativeMask;
const vMem = {};

const bigOr = (a, b) => ((a / MAX_INT) | (b / MAX_INT)) * MAX_INT + ((a % MAX_INT) | (b % MAX_INT));
const bigAnd = (a, b) => ((a / MAX_INT) & (b / MAX_INT)) * MAX_INT + ((a % MAX_INT) & (b % MAX_INT));

require('fs').readFileSync('data.txt', 'utf8').split('\n').forEach((line) => {
  const [, mask] = line.match(/^mask = ([01X]+)$/) || [];
  const [, addr, value] = line.match(/^mem\[(\d+)\] = (\d+)$/) || [];

  if (mask) {
    positiveMask = parseInt(mask.replace(/X/g, '0'), 2);
    negativeMask = parseInt(mask.replace(/X/g, '1'), 2);
  } else if (addr && value) {
    vMem[addr] = Number(value);
    vMem[addr] = bigOr(vMem[addr], positiveMask);
    vMem[addr] = bigAnd(vMem[addr], negativeMask);
  }
});

console.log('Memory sum:', Object.values(vMem).reduce((acc, val) => acc + val, 0));
