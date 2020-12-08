let acc = 0;
const asm = require('fs').readFileSync('data.txt', 'utf8').split('\n');
const history = {};

for (let pc = 0; pc < asm.length; pc++) {
  if (history[pc]) {
    console.log('Infinite loop at:', acc);
    break;
  }

  const [, op, val] = asm[pc].match(/^(jmp|acc|nop) ([+-]\d+)$/);

  if (op === 'acc') acc += Number(val);
  if (op === 'jmp') pc += Number(val) - 1;

  history[pc] = true;
}
