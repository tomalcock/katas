const latestClock = require('../katas');

describe('likes function', () => {
    test('Recives 0,0,0,0, turns midnight', () => {
        expect(latestClock(0,0,0,0)).toBe("00:00")
    })

    test('Recieves 0,0,0,num, returns num past midnight', () => {
        expect(latestClock(0,0,0,3)).toBe("00:03")
        expect(latestClock(5,0,0,0)).toBe("00:05")
    })

    test.only('Recieves 1 number greater than 2, returns correct time', () => {
        // expect(latestClock(3,2,1,0)).toBe("21:03")
        // expect(latestClock(7,2,1,0)).toBe("21:07")
        // expect(latestClock(0,1,1,9)).toBe("11:09")
        expect(latestClock(2,4,0,0)).toBe("20:40")
    })

    test('Recieves 2 numbers greater than 2, returns correct time', () => {
        expect(latestClock(0,2,9,8)).toBe("09:28")
        expect(latestClock(5,0,7,1)).toBe("10:57")
        expect(latestClock(0,3,9,9)).toBe("09:39")
        expect(latestClock(3,4,1,0)).toBe("10:43")
    })
})