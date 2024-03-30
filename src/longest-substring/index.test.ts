import {describe, it, expect} from 'vitest'
import lengthOfLongestSubstring from './brootforce'
import lengthOfLongestSubstringPosition from './position'

describe('longest substring', () => {
    it('test 1', () => {
        const s = "abcabcbb"

        expect(lengthOfLongestSubstring(s)).toBe(3)
    })

    it('test 2', () => {
        const s = "bbbbb"

        expect(lengthOfLongestSubstring(s)).toBe(1)
    })

    it('test 3', () => {
        const s = "pwwkew"

        expect(lengthOfLongestSubstring(s)).toBe(3)
    })

    it('test 4', () => {
        const s = " "

        expect(lengthOfLongestSubstring(s)).toBe(1)
    })

    it('test 5', () => {
        const s = "   bg  "

        expect(lengthOfLongestSubstring(s)).toBe(3)
    })

    it('test 6', () => {
        const s = "dvdf"

        expect(lengthOfLongestSubstring(s)).toBe(3)
    })
})

describe('longest substring position', () => {
    it('test 1', () => {
        const s = "abcabcbb"

        expect(lengthOfLongestSubstringPosition(s)).toBe(3)
    })

    it('test 2', () => {
        const s = "bbbbb"

        expect(lengthOfLongestSubstringPosition(s)).toBe(1)
    })

    it('test 3', () => {
        const s = "pwwkew"

        expect(lengthOfLongestSubstringPosition(s)).toBe(3)
    })

    it('test 4', () => {
        const s = " "

        expect(lengthOfLongestSubstringPosition(s)).toBe(1)
    })

    it('test 5', () => {
        const s = "   bg  "

        expect(lengthOfLongestSubstringPosition(s)).toBe(3)
    })

    it('test 6', () => {
        const s = "dvdf"

        expect(lengthOfLongestSubstringPosition(s)).toBe(3)
    })
})