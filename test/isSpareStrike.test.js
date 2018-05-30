const isSpare = require('../game.js').isSpare
const isStrike = require('../game.js').isStrike

test('isSpare should tell us this frame score is a spare score', function () {
  // Arrange
  const expected = true

  // Act
  const actual = isSpare ([3, 7])

  // Assert
  expect(actual).toBe(expected)
})

test('isSpare should tell us this frame score is a spare score', function () {
  // Arrange
  const expected = false

  // Act
  const actual = isSpare ([3, 6])

  // Assert
  expect(actual).toBe(expected)
})


test('isStrike should tell us this frame score is a strike score', function () {
  // Arrange
  const expected = true

  // Act
  const actual = isStrike([10, 0])

  // Assert
  expect(actual).toBe(expected)
})

test('isStrike should tell us this frame score is a strike score', function () {
  // Arrange
  const expected = false

  // Act
  const actual = isStrike([9, 0])

  // Assert
  expect(actual).toBe(expected)
})