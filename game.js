// Score 119:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141:
//

var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]

function bowling (framse) {
  let first = 0
  let second = 0
  let spare = 0
  let strike = 0
  let total = 0
  for (let i = 0; i < frames.length; i++) {
    alert(tmpCal(frames[0]))
  }
}

function tmpCal (arr) {
  let first = arr[0]
  let second = arr[1]
  let sum = first + second

  if (first === 10 || second === 10) {
    return 'strike'
  }
  if (sum === 10) {
    return 'spare'
  } else if (sum < 10) {
    return 'open'
  }
}
