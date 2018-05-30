const addFrameScores = require('../game.js').addFrameScores

test('addFrameScores adds all numbers in frameScores', function () {
  // Arrange
  const expected = 15

  // Act
  const actual = addFrameScores([2, 7, 6])

  // Assert
  expect(actual).toBe(expected)
})