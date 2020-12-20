const MAX_INT = 0x40000;

let addressMask;
let reverseMask;
let floatingMasks = [];
const vMem = {};

const bigOr = (a, b) => ((a / MAX_INT) | (b / MAX_INT)) * MAX_INT + ((a % MAX_INT) | (b % MAX_INT));
const bigAnd = (a, b) => ((a / MAX_INT) & (b / MAX_INT)) * MAX_INT + ((a % MAX_INT) & (b % MAX_INT));

require('fs').readFileSync('data.txt', 'utf8').split('\n').forEach((line) => {
  const [, mask] = line.match(/^mask = ([01X]+)$/) || [];
  const [, addr, value] = line.match(/^mem\[(\d+)\] = (\d+)$/) || [];

  if (mask) {
    addressMask = parseInt(mask.replace(/X/g, '0'), 2);
    reverseMask = parseInt(mask.replace(/[^X]/g, '1').replace(/X/g, '0'), 2);
    floatingMasks = [];

    const floatingMask = mask.replace(/[^X]/g, '0').replace(/X/g, '1');
    const floatingBits = floatingMask.replace(/[^1]/g, '');

    for (let i = 0; i < parseInt(floatingBits, 2) + 1; i++) {
      let variantMask = floatingMask;
      let variantBit = 1;

      for (var x = 35; x >= 0; x--) {
        if (floatingMask[x] === '1') {
          variantMask = `${variantMask.substr(0, x)}${i & variantBit ? '1' : '0'}${variantMask.substr(x + 1)}`;
          variantBit <<= 1;
        }
      }

      floatingMasks.push(parseInt(variantMask, 2));
    }
  } else if (addr && value) {
    floatingMasks.forEach((floatingMask) => {
      vMem[bigOr(bigOr(bigAnd(Number(addr), reverseMask), addressMask), floatingMask)] = Number(value);
    });
  }
});

console.log('Memory sum:', Object.values(vMem).reduce((acc, val) => acc + val, 0));
