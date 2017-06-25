var mainModule = require('../main')
var should = require('should')

describe('test main module', () => {
    it('result should throw error when n is not a number', () => {
        (function() {
            mainModule.fibonacci()
        }).should.throw('n should be a number')
    })

    it('result should throw error when n < 0', () => {
        (function() {
            mainModule.fibonacci(-1)
        }).should.throw('n should be >= 0')
    })

    it('result should be n when n < 2', () => {
        mainModule.fibonacci(1).should.equal(1)
    })

    it('result should be 55 when n is 10', () => {
        mainModule.fibonacci(10).should.equal(55)
    })
})

