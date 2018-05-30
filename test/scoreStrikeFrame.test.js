const scoreStrikeFrame = require('../game.js')
test('scoreStrikeFrame adds frame + 1 and frame[0] and returns total', function () {
// Arrange
  const expected = [ ]

  // Act
  const actual = scoreStrikeFrame(frame + 1 + 10)

  // Assert

  expect(actual).toEqual(expected)
})
