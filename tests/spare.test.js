const spare = require('../game.js').spare

test('calculate a spare score for frame', function () {
  // Arrange
  const expected = 14
  // Act
  const actual = spare([3, 7], [4, 5], [2, 1])

  // Assert
  expect(actual).toBe(expected)
})