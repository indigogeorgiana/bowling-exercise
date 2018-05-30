const spareFrames = require('../spareFrames.js')

test('addSpareFrames adds three scores', () => {
  // arrange
  const expected = 12
  // act
  const actual = spareFrames.addSpareFrames([[3, 7], [2, 4]])
  // assert
  expect(actual).toBe(expected)
})
