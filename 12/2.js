const currentPosition = { N: 0, E: 0, S: 0, W: 0 };
const currentWaypoint = { N: 1, E: 10, S: 0, W: 0 };

const rotateWaypoint = (counterClockwise) => {
  let prevWaypoint = { ...currentWaypoint };

  currentWaypoint.N = counterClockwise ? prevWaypoint.E : prevWaypoint.W;
  currentWaypoint.E = counterClockwise ? prevWaypoint.S : prevWaypoint.N;
  currentWaypoint.S = counterClockwise ? prevWaypoint.W : prevWaypoint.E;
  currentWaypoint.W = counterClockwise ? prevWaypoint.N : prevWaypoint.S;
};

require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').forEach((data) => {
  const [, direction, distance] = data.match(/([FLRNESW])(\d+)/) || [];

  if (direction === 'L' || direction === 'R') {
    let rotations = distance / 90;

    while (rotations--) {
      rotateWaypoint(direction === 'L');
    }
  }
  if (direction === 'F') Object.entries(currentWaypoint).forEach(([key, value]) => currentPosition[key] += currentWaypoint[key] * distance);
  if (currentWaypoint[direction] !== undefined) currentWaypoint[direction] += Number(distance);
});

console.log('Manhattan distance:', Math.abs(currentPosition.N - currentPosition.S) + Math.abs(currentPosition.E - currentPosition.W));
