let first = 0
let second = 0
let third = 0
let spare = 0
let strike = 0
let total = 0
let i = 0
// let arrRoundScores = []

const frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]
round1()
function round1 () {
  for (i = 0; i < frames.length; i++) {
    first = frames[i][0] //   first = 1st of curent array
    second = frames[i][1] //  second = 2nd of current array
    if (i === 9) { //  if its reached round 10
      finalRound() //          go to finnal round
    } else if (first === 10) { // if first is 10
      strike = 10 //              strike gains 10
      strikeFn(i += 1) //               go to strike
    } else if (first + second === 10) {
      spare = 10
      spareFn(i += 1)
    } else {
      total += (first + second)
    }
  }
}

function strikeFn (a) {
  first = frames[a][0]
  second = frames[a][1]
  if ((strike === 30) && (first !== 10) && (first + second !== 10)) { // strike is 10 or more and no strike or spare
    (total += (strike + first * 3 + second * 2)) //     total gains strike value + round total
    strike = 0
  } else if ((strike >= 10) && (first !== 10) && (first + second !== 10)) { // strike is 10 or more and no strike or spare
    (total += (strike + first + first + second + second)) //     total gains strike value + round total
    strike = 0
  } else if ((strike >= 10) && (first !== 10) && (first + second === 10)) { // strike is 10 or more and no strike but meets spare
    total += (strike + 10) //                    total gains strike value + 10
    spare = 10 //                               spare equals 10
    strike = 0
    spareFn(a += 1) //                              got to spare function counter gains 1
  } else if (strike === 10 && first === 10) { // strike meets strike
    strike = 30 //                              strike equals 30
    strikeFn(a += 1)
  } else if (strike === 30 && first === 10) { // if two stike hame met a third
    strike = 30 //                               strike = 30
    total += 30 //                               total gains 30
    strikeFn(a += 1)
  }
}

function spareFn (b) {
  first = frames[b][0]
  second = frames[b][1]
  if ((spare === 10) && (first === 10)) { // spare meets strike
    total += (20) //                      total gains 20
    strike = 10 //                        strike equals 10
    strike(b += 1)
  } else if ((spare === 10) && ((first + second) === 10)) { // spare meets spare
    total += (20) //                      total gains 20
    spare = 10 //                         spare equals 10
    strike = 0
    spare(b += 1)
  } else {
    (total += (spare + first + first + second)) // otherwise total gains 10 + round total
  }
}

function finalRound () {
  first = frames[9][0]
  second = frames[9][1]
  third = frames[9][2]
  if (strike === 30) {
    total += (strike + first + second + third)
  } else if (strike === 10 && first !== 10) {
    (total += (strike + first + second + third))
  } else if (strike === 10 && first === 10) {
    strike = 20
  } else if (spare === 10) {
    (total += spare + first + second)
  } else if (first === 10) {
    total += (first + second + third)
  } else if (first + second === 10) {
    spare = 10
  } else {
    total += (first + second + third)
  }
}
