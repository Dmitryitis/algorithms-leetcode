import {describe, it, expect} from 'vitest'
import {letterCombinations} from './brootforce'


describe('3sum', () => {
    it('test 1', () => {
        const digits = ""

        expect(letterCombinations(digits)).toStrictEqual([''])
    })

    it('test 2', () => {
        const digits = "2"
        expect(letterCombinations(digits)).toStrictEqual(['a', 'b', 'c'])
    })

    it('test 3', () => {
        const digits = "23"
        expect(letterCombinations(digits)).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
    })
})