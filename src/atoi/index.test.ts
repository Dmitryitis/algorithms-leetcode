import {describe, expect, it} from 'vitest'
import myAtoi from './brootforce'

describe('my atoi', () => {
    it('test 1', () => {
        const s = '42'

        expect(myAtoi(s)).toBe(42)
    })

    it('test 2', () => {
        const s = "   -42"

        expect(myAtoi(s)).toBe(-42)
    })

    it('test 3', () => {
        const s = "4193 with words"

        expect(myAtoi(s)).toBe(4193)
    })

    it('test 4', () => {
        const s = "words and 987"

        expect(myAtoi(s)).toBe(987)
    })

    it('test 5', () => {
        const s = "-91283472332"

        expect(myAtoi(s)).toBe(-2147483648)
    })
})