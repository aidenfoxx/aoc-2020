let prevState = [];
let nextState = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').map((row) => row.split(''));;

const directionsOccupied = (seatX, seatY) => {
  let collisions = 0;

  for (let velX = -1; velX <= 1; velX++) {
    for (let velY = -1; velY <= 1; velY++) {
      if (!velX && !velY) {
        continue;
      }

      let x = seatX;
      let y = seatY;

      while (x > -1 && y > -1 && x <= prevState.length && y <= prevState[0].length) {
        x = x + 1 * velX;
        y = y + 1 * velY;

        if (prevState[x] && prevState[x][y] === "L") {
          break;
        }
        if (prevState[x] && prevState[x][y] === "#") {
          collisions++;
          break;
        }
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

      let collisions = directionsOccupied(x, y);

      if (nextState[x][y] === '#' && collisions > 4) {
        nextState[x][y] = 'L'
      } else if (nextState[x][y] === 'L' && !collisions) {
        nextState[x][y] = '#'
      }
    }
  }
}

console.log('Ocupied seats:', nextState.reduce((acc, row) => acc + row.reduce((acc, seat) => seat === '#' ? acc + 1: acc, 0), 0));
