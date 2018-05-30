module.exports = {
  open,
  addFrameScores,
  identifyNextFrame,
  isSpare,
  isStrike,
  spare,
  strike
}

// Score 119:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]

let finalScore = 0
let frameScores = []

function overall () {

}
// adds each score to make total score for each frame (2/3 x balls Open and Tenth Frame)
function open (frame) {
  let tempScore = 0
  for (let score of frame) {
    tempScore += score
  }
  return tempScore
}

// adds the total score from all ten frames
function addFrameScores (frameScore) {
  for (let score of frameScore) {
    finalScore += score
  }
  return finalScore
}

// identify next frame or ball
function identifyNextFrame () {

}

// identify whether its spare
function isSpare (frame) {
  if (frame[0] + frame[1] === 10) {
    return true
  }
  return false
}

// identify whether its strike
function isStrike (frame) {
  if (frame[0] === 10) {
    return true
  }
  return false
}

// function for calculating spare frame scores
function spare (frame, frame2) {
    return open(frame) + frame2[0]
}

// function for calculating strike frame scores
function strike (frame, frame2, frame3) {
  if (frame2[0]===10) {
    return open(frame) + frame2[0] + frame3[0]
  } else {
    return open(frame) + frame2[0] + frame2[1]
  }
}

// loop to calculate each frame individually
