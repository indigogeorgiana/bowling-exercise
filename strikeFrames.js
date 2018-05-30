module.exports = {
  addStrikeFrames
}

// check if second frame is a strike
// if not, calculate result from the first two arrays
// if yes, calculate result using all three arrays
function addStrikeFrames (arr) {
  // if not a strike
  if (arr[1][0] < 10) {
    return arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1]
  } else {
    return arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0]
  }
}
