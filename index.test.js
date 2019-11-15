const fizzbuzz = require('./index');

describe('FizzBuzz', () => {
    it('should return Fizz if value is 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz')
    })
    it('should return Buzz if value is 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz')
    })
    it('should return FizzBuzz if value is 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz')
    })
    it('should return the same value if is diferent of 3, 5 and 15', () => {
        expect(fizzbuzz(1)).toBe(1)
    })

})