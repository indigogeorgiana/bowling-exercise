// Score 119:
//
var frames = [
 [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
//
// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]


//score a single frame
function scoreFrame(frame, nextFrame) {
  var score = frame[0] + frame[1]
  if (score == 10 && frame[0] != 10) { //spare
    score += nextFrame[0] 
  }
  return score
}

//score all othe frames simply
function scoreFrames(frames) {
  return frames.reduce(function(acc, frame, i) {
    return acc + scoreFrame(frame, frames[i+1])
  }, 0)
}

console.log(scoreFrames(frames))
//score spares properly

//score strikes
//score double strikes
//score last frame
