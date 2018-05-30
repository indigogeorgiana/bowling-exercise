const identifyNextFrame = require('../game.js').identifyNextFrame

test('', function () {
  // Arrange
  const expected = 15

  // Act
  const actual = addFrameScores([2, 7, 6])

  // Assert
  expect(actual).toBe(expected)
})