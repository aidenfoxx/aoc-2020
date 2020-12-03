const { readFileSync } = require('fs');

const data = readFileSync('data.txt', 'utf8').trim().split('\n');

data.forEach(num1 => {
  data.forEach(num2 => {
    if (Number(num1) + Number(num2) === 2020) {
      console.log('Result:', Number(num1) * Number(num2));
      process.exit();
    }
  });
});
