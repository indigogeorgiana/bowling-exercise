const strikeFrames = require('../strikeFrames.js')

test('addStrikeFrames adds three scores with only one strike', () => {
  // arrange
  const expected = 16
  // act
  const actual = strikeFrames.addStrikeFrames([[10, 0], [2, 4], [2, 3]])
  // assert
  expect(actual).toBe(expected)
})

test('addStrikeFrames adds three scores with two strikes', () => {
  // arrange
  const expected = 22
  // act
  const actual = strikeFrames.addStrikeFrames([[10, 0], [10, 0], [2, 3]])
  // assert
  expect(actual).toBe(expected)
})
