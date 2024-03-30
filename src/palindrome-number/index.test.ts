import { expect, describe, it } from 'vitest';
import {isPalindrome} from './brootforce'

describe('palindrome number', () => {
    it('test 1', () => {
        const x = 121

        expect(isPalindrome(x)).toBe(true)
    })

    it('test 2', () => {
        const x = -121

        expect(isPalindrome(x)).toBe(false)
    })

    it('test 2', () => {
        const x = 10

        expect(isPalindrome(x)).toBe(false)
    })
})