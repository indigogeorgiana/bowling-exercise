const open = require('../game.js').open

test('open adds 2 numbers within in a frame', function () {
  // Arrange
  const expected = 9

  // Act
  const actual = open([2, 7])

  // Assert
  expect(actual).toBe(expected)
})