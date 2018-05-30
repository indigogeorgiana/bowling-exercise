module.exports = {
  open,
  addFrameScores
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

function open (frame) {
  let tempScore = 0
  for (let score of frame) {
    tempScore += score
  }
  return tempScore
}

function addFrameScores (frameScore) {
  for (let score of frameScore) {
    finalScore += score
  }
  return finalScore
}




// function spare (frame)
