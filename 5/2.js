const getSeatId = (input, rowMin = 0, rowMax = 127, colMin = 0, colMax = 7) => {
  if (rowMin === rowMax && colMin === colMax) {
    return rowMin * 8 + colMin;
  } else if (!input) {
    return false;
  }

  const identifier = input.slice(0, 1);
  return getSeatId(
    input.slice(1),
    identifier === 'B' ? Math.ceil((rowMin + rowMax) / 2) : rowMin,
    identifier === 'F' ? Math.floor((rowMax + rowMin) / 2) : rowMax,
    identifier === 'R' ? Math.ceil((colMin + colMax) / 2) : colMin,
    identifier === 'L' ? Math.floor((colMax + colMin) / 2) : colMax
  );
};

let prevVal = -1;

require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').map((ticketId) => getSeatId(ticketId.trim())).sort((a, b) => a - b).forEach((seatId) => {
  if (prevVal !== -1 && seatId - prevVal > 1) {
    console.log('Undefined seatId(s) between:', prevVal, seatId);
  }

  prevVal = seatId;
});
