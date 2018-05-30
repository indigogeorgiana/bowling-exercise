module.exports = {
    bowling
}

let first = 0
let second = 0
let spare = 0
let strike = 0
let total = 0


const frames = [
  [3, 6], [10,0], [0, 9], [0,0], [1, 6], [7, 2], [3, 3], [8, 1], [0, 6], [10, 6, 10]
]

function round1() {
  for (let i = 0; i < frames.length; i++) {
    first = frames[i][0]
    second = frames[i][1]
    if (frames[i] === 9) {
      finalRound()
    } else if (strike === 20) {
      total += (strike + first)
    } else if (strike = 10 && first !== 10) {
      (total = (strike + first + second))
    } else if (strike = 10 && first === 10) {
      strike = 20
    } else if (spare === 10) {
      (total += spare)
    } else if (first === 10) {
      strike += 10
    } else if (first + second === 10) {
      spare += 10
    } else { 
      total += (first + second)        
    }
  }
}

function finalRound() {
  for (let i = 0; i < frames.length; i++) {
    first = frames[i][0]
    second = frames[i][1]
    third = frames[i][2]
    if (strike === 20) {
      total += (strike + first + second + third)
    } else if (strike = 10 && first !== 10) {
      (total = (strike + first + second + third))
    } else if (strike = 10 && first === 10) {
      strike = 20
    } else if (spare === 10) {
      (total += spare)
    } else if (first === 10) {
      strike += 10
    } else if (first + second === 10) {
      spare += 10
    } else { 
      total += (first + second )        
    }
  }
}

}
