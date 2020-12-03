const { readFileSync } = require('fs');

const data = readFileSync('data.txt', 'utf8').trim().split('\n');

data.forEach(num1 => {
  data.forEach(num2 => {
    data.forEach(num3 => {
      if (Number(num1) + Number(num2) + Number(num3) === 2020) {
        console.log('Result:', Number(num1) * Number(num2) * Number(num3));
        process.exit();
      }
    });
  });
});
