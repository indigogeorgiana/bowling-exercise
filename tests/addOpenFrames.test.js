const openFrames = require('../openFrame.js')

test('addOpenFrames adds two scores that equal less than 10', () => {
  // arrange
  const expected = 8
  // act
  const actual = openFrames.addOpenFrames([3, 5])
  // assert
  expect(actual).toBe(expected)
})
