 Score 119:

 var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
 ]

function bowling() {
  total = ""
  for (i = 0; i < frames.length; i++) {
    if (index[0] == 10) {
      strike()
    } else if (index[0] + index[1] == 10) {
     spare()
    } else if (index[0] + index[1] < 10){
    open()
    }
  }
}


 

function open (a, b) {
  frames[i]
  total[index[0]+ index[1]]
 }

 function spare () {

 }

 function strike () {

 }

 function gutterball () {

 }

// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
