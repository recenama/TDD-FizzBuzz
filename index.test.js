const fizzbuzz = require('./index');

describe('FizzBuzz', () => {
    it('should return Fizz if value is 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz')
    })
})