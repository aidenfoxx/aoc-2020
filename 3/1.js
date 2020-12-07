console.log('Trees:', require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').reduce((acc, line, index) => line[(index * 3) % line.trim().length] === '#' ? acc + 1 : acc, 0));
