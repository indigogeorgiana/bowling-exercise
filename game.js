// Score 119:
//
 var frames = [ [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
 ]
//
// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]

var total = 0

startGame(frames)

function startGame (frames) {
  for (var i = 0; i < frames.length - 1; i++) {
    if (frames[i][0] === 10) { // conditional for strike
      if (frames[i + 1][0] === 10) { total += frames[i + 2][0] + 20 } else { 
        total += frames[i + 1][0] + frames[i + 1][1] + 10 } // take ball 1 from next frame and ball two from next frame and add ten
    } else if (frames[i][0] + frames[i][1] === 10 && frames[1] !== 0) { // conditional for spares
      total += frames[i + 1][0] + 10 // take ball 1 from next frame and add 10
    } else {
      total += frames[i][0] + frames[i][1]
    }
    console.log(total)
  }
  for (var j = 0; j < frames[9].length; j++) {
    total += frames[9][j]
  }
  console.log(total)
}

function total () {
  // reset
  if strike === true (total)// strike true
  if spare === true (total)//spare true 
}
