let prevState = [];
let nextState = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').map((row) => row.split(''));;

const adjacentsOccupied = (startX, startY) => {
  let collisions = 0;

  for (let offsetX = -1; offsetX <= 1; offsetX++) {
    for (let offsetY = -1; offsetY <= 1; offsetY++) {
      if (!offsetX && !offsetY) {
        continue;
      }

      if (prevState[startX + offsetX] && prevState[startX + offsetX][startY + offsetY] === '#') {
        collisions++;
      }
    }
  }

  return collisions;
};

while (JSON.stringify(prevState) !== JSON.stringify(nextState)) {
  prevState = nextState.map((row) => [...row]);

  for (let x = 0; x < nextState.length; x++) {
    for (let y = 0; y < nextState[x].length; y++) {
      if (nextState[x][y] === '.') {
        continue;
      }

      let collisions = adjacentsOccupied(x, y);

      if (nextState[x][y] === 'L' && !collisions) {
        nextState[x][y] = '#'
      } else if (nextState[x][y] === '#' && collisions > 3) {
        nextState[x][y] = 'L'
      }
    }
  }
}

console.log('Ocupied seats:', nextState.reduce((acc, row) => acc + row.reduce((acc, seat) => seat === '#' ? acc + 1: acc, 0), 0));
