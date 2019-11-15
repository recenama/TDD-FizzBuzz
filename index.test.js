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
    it('should return Fizz if value is multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('Fizz')
    })
    it('should return Buzz if value is multiple of 10', () => {
        expect(fizzbuzz(10)).toBe('Buzz')
    })
    it('should return FizzBuzz if value is multiple of 3 and 5', () => {
        expect(fizzbuzz(30)).toBe('FizzBuzz')
    })
})