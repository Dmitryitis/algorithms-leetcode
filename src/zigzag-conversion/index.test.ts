import {describe, it, expect} from "vitest";
import convert from './brootforce'
import convertFast from './zigzag'

describe('zigzag conversion', () => {
    it('test 1',() => {
        const s = "PAYPALISHIRING"
        const numRows = 3

        expect(convert(s, numRows)).toBe('PAHNAPLSIIGYIR')
    })

    it('test 2',() => {
        const s = "A"
        const numRows = 1

        expect(convert(s, numRows)).toBe('A')
    })

    it('test 3',() => {
        const s = "PAYPALISHIRING"
        const numRows = 4

        expect(convert(s, numRows)).toBe('PINALSIGYAHRPI')
    })
})

describe('zigzag fast conversion', () => {
    it('test 1',() => {
        const s = "PAYPALISHIRING"
        const numRows = 3

        expect(convertFast(s, numRows)).toBe('PAHNAPLSIIGYIR')
    })

    it('test 2',() => {
        const s = "A"
        const numRows = 1

        expect(convertFast(s, numRows)).toBe('A')
    })

    it('test 3',() => {
        const s = "PAYPALISHIRING"
        const numRows = 4

        expect(convertFast(s, numRows)).toBe('PINALSIGYAHRPI')
    })
})