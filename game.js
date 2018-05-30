// Score 119:

var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
scoreGame(frames)

function scoreGame (frames) {
  for (i = 0; i < frames.length; i++) {
    if (frames[i][0] == 10) {
      scoreStrikeFrame()
    } else if (frames[i][0] + frames[i][1] == 10) {
      scoreSpareFrame()
    } else {
      scoreOpenFrame(frames[i])
    }
  }
}

function scoreOpenFrame (frame) {
  return frame[0] + frame[1]
}

function scoreSpareFrame (frame) {
  return (10 + frame[0]
}

function socreStrikeFrame (frame) {
  return 10 + frames++
}

function gutterball () {

}

// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
