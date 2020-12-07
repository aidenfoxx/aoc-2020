const getSeatId = (input) => parseInt(input.slice(0,7).replace(/B/g, '1').replace(/F/g, '0'), 2) * 8 + parseInt(input.slice(7,10).replace(/R/g, '1').replace(/L/g, '0'), 2);

let prevVal = -1;
require('fs').readFileSync('data.txt', 'utf8').trim().split('\n').map((ticketId) => getSeatId(ticketId)).sort((a, b) => a - b).forEach((seatId) => {
  if (prevVal !== -1 && seatId - prevVal > 1) {
    console.log('Undefined seatId(s) between:', prevVal, seatId);
  }
  prevVal = seatId;
});
