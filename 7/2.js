const data = require('fs').readFileSync('data.txt', 'utf8');

const getBags = (color = 'shiny gold') => {
  let total = 1;
  const exp = new RegExp(`^${color} bags contain(?: (\\d) ([a-z]+ [a-z]+) bag[s]?[,.]|)(?: (\\d) ([a-z]+ [a-z]+) bag[s]?[,.]|)(?: (\\d) ([a-z]+ [a-z]+) bag[s]?[,.]|)(?: (\\d) ([a-z]+ [a-z]+) bag[s]?[,.]|)$`, 'gm');
  const bag = exp.exec(data);

  if (bag) {
    if (bag[1]) {
      total += Number(bag[1]) * getBags(bag[2].trim());
    }
    if (bag[3]) {
      total += Number(bag[3]) * getBags(bag[4].trim());
    }
    if (bag[5]) {
      total += Number(bag[5]) * getBags(bag[6].trim());
    }
    if (bag[7]) {
      total += Number(bag[7]) * getBags(bag[8].trim());
    }
  }

  return total;
};

console.log('Total bags:', getBags() - 1);
