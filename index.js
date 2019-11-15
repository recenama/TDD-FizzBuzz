module.exports = (num) => {
    const isMultipleOf3 = num % 3 === 0;
    const isMultipleOf5 = num % 5 === 0;
    if (isMultipleOf3 && isMultipleOf5) return 'FizzBuzz';
    if (isMultipleOf3) return 'Fizz';
    if (isMultipleOf5) return 'Buzz';
    return num;
};