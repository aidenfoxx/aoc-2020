const data = require('fs').readFileSync('data.txt', 'utf8');

const getBags = (color = 'shiny gold', parsed = {}) => {
  let bag;
  let total = 0;
  const exp = new RegExp(`(.+)bags contain.+${color}.+`, 'gm');

  while (bag = exp.exec(data)) {
    if (parsed[bag[0]]) {
      continue;
    }
    parsed[bag[0]] = true;
    total += getBags(bag[1].trim(), parsed) + 1;
  }

  return total;
};

console.log('Total bags:', getBags());
