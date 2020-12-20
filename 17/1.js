const universeWidth = 3;
const universeHeight= 3;
const initialSlice = require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').map((row) => row.trim().split(''));

let activeCubes;
let prevUniverse = { 0: initialSlice };
let nextUniverse;

const getActiveAdjacentCubes = (z, y, x) =>
  (prevUniverse[z - 1]?.[y - 1]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z - 1]?.[y - 1]?.[x] === '#' ? 1 : 0) +
  (prevUniverse[z - 1]?.[y - 1]?.[x + 1] === '#' ? 1 : 0) +
  (prevUniverse[z - 1]?.[y]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z - 1]?.[y]?.[x] === '#' ? 1 : 0) +
  (prevUniverse[z - 1]?.[y]?.[x + 1] === '#' ? 1 : 0) +
  (prevUniverse[z - 1]?.[y + 1]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z - 1]?.[y + 1]?.[x] === '#' ? 1 : 0) +
  (prevUniverse[z - 1]?.[y + 1]?.[x + 1] === '#' ? 1 : 0) +
  (prevUniverse[z]?.[y - 1]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z]?.[y - 1]?.[x] === '#' ? 1 : 0) +
  (prevUniverse[z]?.[y - 1]?.[x + 1] === '#' ? 1 : 0) +
  (prevUniverse[z]?.[y]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z]?.[y]?.[x + 1] === '#' ? 1 : 0) +
  (prevUniverse[z]?.[y + 1]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z]?.[y + 1]?.[x] === '#' ? 1 : 0) +
  (prevUniverse[z]?.[y + 1]?.[x + 1] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y - 1]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y - 1]?.[x] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y - 1]?.[x + 1] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y]?.[x] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y]?.[x + 1] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y + 1]?.[x - 1] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y + 1]?.[x] === '#' ? 1 : 0) +
  (prevUniverse[z + 1]?.[y + 1]?.[x + 1] === '#' ? 1 : 0);

for (let i = 0; i < 6; i++) {
  activeCubes = 0;
  nextUniverse = { ...prevUniverse };

  for (let z = -i; z <= i; z++) {
    if (!nextUniverse[z]) {
      nextUniverse[z] = [];
    }

    for (let y = 0; y < universeHeight; y++) {
      if (!nextUniverse[z][y]) {
        nextUniverse[z][y] = [];
      }

      for (let x = 0; x < universeWidth; x++) {
        const currentCubeActive = nextUniverse[z][y]?.[x] === '#';
        const activeAdjacentCubes = getActiveAdjacentCubes(z, y, x);

        if (currentCubeActive && activeAdjacentCubes >= 2 && activeAdjacentCubes <= 3 || !currentCubeActive && activeAdjacentCubes === 3) {
          nextUniverse[z][y][x] = '#';
          activeCubes++;
        } else {
          nextUniverse[z][y][x] = '.';
        }
      }
    }
  }

  Object.entries(nextUniverse).forEach(([_, universe]) => {
    universe.forEach((row) => console.log(row.join('')));
    console.log('');
  });

  console.log('END CYCLE', "\n");

  prevUniverse = nextUniverse;
}

console.log(activeCubes);


