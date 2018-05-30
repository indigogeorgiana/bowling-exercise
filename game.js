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

var finalScore = 0

startGame(frames)

function startGame (frames) {
  for (var i = 0; i < frames.length - 1; i++) {
    if (frames[i][0] === 10) {                                                              // conditional for strike
      if (frames[i + 1][0] === 10) {
        total('doubleStrike', i)}
      else {
        total('strike', i)
      }                                                                                     // take ball 1 from next frame and ball two from next frame and add ten
    }
    else if (frames[i][0] + frames[i][1] === 10 && frames[1] !== 0) {                     // conditional for spares
      total('spare', i)                                                                     // take ball 1 from next frame and add 10
    } else {
      total('open', i)
    }
  }
  for (var j = 0; j < frames[9].length; j++) {
    finalScore += frames[9][j]
  }
  console.log(finalScore)
}

function total (bowl, i) {
  switch (bowl) {
    case 'strike':
      finalScore += frames[i + 1][0] + frames[i + 1][1] + 10
      break
    case 'doubleStrike':
      finalScore += frames[i + 2][0] + 20
      break
    case 'spare':
      finalScore += frames[i + 1][0] + 10
      break
    case 'open':
      finalScore += frames[i][0] + frames[i][1]
      break
  }
}
