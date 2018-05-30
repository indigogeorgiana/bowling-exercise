const scoreGame = require('../game.js')
test('scoreGame   ', function () {
// Arrange
  const expected = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]

  // Act
  const actual = scoreGame()

  // Assert

  expect(actual).toEqual(expected)
})

test('scoreGame   ', function () {
  // Arrange
  const expected = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]

  // Act
  const actual = scoreGame()

  // Assert

  expect(actual).toEqual(expected)
})
