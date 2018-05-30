const strike = require('../game.js').strike

test('calculate a strike score for frame', function () {

  // Arrange
  const expected = 19
  // Act
  const actual = strike([10, 0], [4, 5], [2, 1])

  // Assert
  expect(actual).toBe(expected)
})

test('calculate a strike score for frame', function () {

  // Arrange
  const expected = 22
  // Act
  const actual = strike([10, 0], [10, 0], [2, 1])

  // Assert
  expect(actual).toBe(expected)
})