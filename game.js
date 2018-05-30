const openFrame = require('./openFrames.js')
const spareFrame = require('./spareFrames.js')
const strikeFrame = require('./strikeFrames.js')
// Score 119:
//
var frames1 = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
//
// Score 141:
//
var frames2 = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]

// create runningScore variable
// loop through frames
// decide whether open spare or strike
// call correct function
// update runningScore
// once loop finishes return totalScore

function getScore (arr) {
  let runningScore = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] + arr[i][1] < 10) {
      runningScore += openFrame.addOpenFrames(arr[i])
    } else if (arr[i][0] === 10) {
      runningScore += strikeFrame.addStrikeFrames([arr[i], arr[i + 1], arr[i + 2]])
    } else {
      runningScore += spareFrame.addSpareFrames([arr[i], arr[i + 1]])
    }
  }
  return runningScore
}

getScore(frames1)
getScore(frames2)
