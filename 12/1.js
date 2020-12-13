let currentDirection = 'E';
let currentPosition = { N: 0, E: 0, S: 0, W: 0 };

require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').forEach((data) => {
  let [, direction, distance] = data.match(/([FLRNESW])(\d+)/) || [];

  if (direction === 'L' || direction === 'R') {
    const directions = Object.keys(currentPosition);
    const prevIndex = directions.indexOf(currentDirection);
    const nextOffset = distance / 90;
    const nextIndex = ((direction === 'L' ? -nextOffset : nextOffset) + prevIndex + 4) % 4;

    currentDirection = directions[nextIndex];
  }
  if (direction === 'F') direction = currentDirection;
  if (currentPosition[direction] !== undefined) currentPosition[direction] += Number(distance);
});

console.log('Manhattan distance:', Math.abs(currentPosition.N - currentPosition.S) + Math.abs(currentPosition.E - currentPosition.W));
