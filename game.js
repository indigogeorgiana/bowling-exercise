// Score 119:
//
//var frames = [
// [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
//]
//
// Score 141:
//
 var frames = [
   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
 ]

 var perfectGame = [
   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
 ]

function scoreFrames(frames) {
  return frames.reduce(function(acc, frame, i) {
    return acc + scoreFrame(frame, frames[i+1], frames[i+2])
  }, 0)
}

function scoreFrame(frame, nextFrame, thirdFrame) {
  var score = frame[0] + frame[1]

  if (isSpare(frame)) {
    score += scoreSpare(frame, nextFrame)
  } else if (isLastFrameAndStrike(frame)) {
    score += frame[2]
  } else if (isSingleStrike(frame, nextFrame)) {
    score += nextFrame[0] + nextFrame[1]
  } else if (isDoubleStrike(frame, nextFrame)) {
    score += scoreDoubleStrike(nextFrame, thirdFrame)
  }
  return score
}

function isLastFrameAndStrike(frame) {
  return frame.length == 3 && frame[0] == 10
}

function scoreSpare(frame, nextFrame) {
  return (frame.length == 3) ? frame[2] : nextFrame[0]
}

function scoreDoubleStrike(nextFrame, thirdFrame) {
  return (nextFrame.length == 3) ? 10 + nextFrame[1] : 10 + thirdFrame[0]
}

function isSpare(frame) {
  return frame[0] != 10 && frame[0] + frame[1] == 10
}

function isSingleStrike(frame, nextFrame) {
  return frame[0] == 10 && nextFrame[0] != 10
}

function isDoubleStrike(frame, nextFrame) {
  return frame[0] == 10 && nextFrame[0] == 10
}

console.log(scoreFrames(frames))
console.log(scoreFrames(perfectGame))
