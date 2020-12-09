const exec = (asm) => {
  let acc = 0;
  const history = {};

  for (let pc = 0; pc < asm.length; pc++) {
    if (history[pc]) return false;

    const [, op, val] = asm[pc].match(/^(jmp|acc|nop) ([+-]\d+)$/) || [];

    if (op === 'acc') acc += Number(val);
    if (op === 'jmp') pc += Number(val) - 1;

    history[pc] = true;
  }

  return acc;
};

const data = require('fs').readFileSync('data.txt', 'utf8').split('\n');
data.forEach((inst, index) => {
  const temp = [...data];
  temp[index] = inst.match(/^nop/) ? inst.replace(/^nop/, 'jmp') : inst.replace(/^jmp/, 'nop');

  const acc = exec(temp);
  if (acc) {
    console.log('Terminated at:', acc);
    return;
  }
});
