const testgame = require('./game2.js')

test('testing the game', () => {
  // arrange
  const expected = 141
  // act
  const result = testgame.round1()
  // result
  expect(result).toEqual(expected)
})
