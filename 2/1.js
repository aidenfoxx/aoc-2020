const { readFileSync } = require('fs');

let valid = 0;

readFileSync('data.txt', 'utf8').trim().split('\n').forEach(input => {
  const [, min, max, char, phrase] = input.trim().match(/^(\d+)-(\d+) (\w): (\w+)$/);
  const matches = phrase.replace(new RegExp(`[^${char}]+`,'g'), '');

  if (matches.length >= min && matches.length <= max) valid++;
});

console.log('Valid passwords:', valid);
