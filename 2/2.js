const { readFileSync } = require('fs');

let valid = 0;

readFileSync('data.txt', 'utf8').trim().split('\n').forEach(input => {
  const [, min, max, char, phrase] = input.trim().match(/^(\d+)-(\d+) (\w): (\w+)$/);

  if (phrase[min - 1] === char && phrase[max - 1] !== char || phrase[min - 1] !== char && phrase[max - 1] === char) valid++;
});

console.log('Valid passwords:', valid);
