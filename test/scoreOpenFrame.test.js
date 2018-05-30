const scoreOpenFrame = require('../game.js')
test('scoreOpenFrame adds frame[0] and frame+1 and returns the total', function () {
// Arrange
  const frames = scoreOpenFrame()
  const expected = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]

  // Act
  const actual = scoreOpenFrame(frames)

  // Assert
  expect(actual).toEqual(expected)
})
