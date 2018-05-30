module.exports = {
  open,
  addFrameScores,
  isSpare,
  isStrike,
  spare,
  strike,
  calculateAll
}

// Score 119:
//
var bowlingFrames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
//
// Score 141:
//
// var bowlingFrames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]

let finalScore = 0
let frameScores = []

// function overall () {

// }

// adds each score to make total score for each frame (2/3 x balls Open and Tenth Frame)
function open (frame) {
  let tempScore = 0
  // for (let i = 0; i < frame.length; i++) {
  //   tempScore += frame[i]
  // }

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

// identify whether its spare
function isSpare (frame) {
  if (frame[0] + frame[1] === 10 && frame[0] !== 10) {
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
  const accum = open(frame) + frame2[0]
  if (frame2[0] !== 10) {
    return (accum + frame2[1])
  } else {
    return (accum + frame3[0])
  }
}

// // loop to calculate each frame individually
function calculateAll () {
  const secondLast = bowlingFrames.length - 2
  const last = bowlingFrames.length - 1
  for (let x = 0; x < 10; x++) {
    if (bowlingFrames[x] === bowlingFrames[last]) {
      frameScores.push(open(bowlingFrames[last]))
    } else if (isStrike(bowlingFrames[x] === bowlingFrames[secondLast])) {
      frameScores.push(10 + last[0] + last[1])
    } else if (isStrike(bowlingFrames[x])) {
      frameScores.push(strike(bowlingFrames[x], bowlingFrames[x + 1], bowlingFrames[x + 2]))
    } else if (isSpare(bowlingFrames[x])) {
      frameScores.push(spare(bowlingFrames[x], bowlingFrames[x + 1]))
    } else {
      frameScores.push(open(bowlingFrames[x]))
    }
  }
  finalScore = open(frameScores)
  return finalScore
}