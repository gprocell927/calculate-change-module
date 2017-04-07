const expect = require('chai').expect
const calcChange = require('../index')

describe('calcChange', () => {
  it('should calculate change', () => {
    const result = calcChange(100,{price: 50})
    expect(result).to.equal(50)
  })
})
