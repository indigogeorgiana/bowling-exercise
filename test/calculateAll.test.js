const calculateAll = require('../game.js').calculateAll



test('calculate a spare score for frame', function () {
  // Arrange
  const expected = [15]
  const bowlingFrames = require('../game.js').bowlingFrames

  // Act
  const actual = calculateAll (bowlingFrames)

  // Assert
  expect(actual).toBe(expected)
})


test('calculate a spare score for frame', function () {
  // Arrange
  const expected = [15]
  // Act
  const actual = calculateAll ([[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]])

  // Assert
  expect(actual).toBe(expected)
})