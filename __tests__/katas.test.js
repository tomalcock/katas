const likes = require('../katas');

describe('likes function', () => {
    test('if names is empty, return no one likes this', () => {
        expect(likes([])).toBe('no one likes this')
    })

    test('if array has one item, return that one person likes this', () => {
        expect(likes(['Tom'])).toBe('Tom likes this')
        expect(likes(['Thomas'])).toBe('Thomas likes this')
    })

    test('if array has two items, return two people likes this', () => {
        expect(likes(['Tom', 'Thomas'])).toBe('Tom and Thomas like this')
    })

    test('if array has three items, return three people likes this', () => {
        expect(likes(['Tom', 'Thomas', 'Tommy'])).toBe('Tom, Thomas and Tommy like this')
    })

    test('if array has more than three items, return more than three people likes this', () => {
        expect(likes(['Tom', 'Thomas', 'Tommy', 'Tombola'])).toBe('Tom, Thomas and 2 others like this')

        expect(likes(['Tom', 'Thomas', 'Tommy', 'Tombola', 'Tommyboy'])).toBe('Tom, Thomas and 3 others like this')
    })
})