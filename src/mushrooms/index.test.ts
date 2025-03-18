import {describe, it, expect} from 'vitest'
import maxMushrooms from './brootforce'

describe.skip('maxMushrooms', () => {
    it('test 1', () => {
        expect(maxMushrooms(5, ["W.W", "C.C", "WW.", "CC.", "CWW"])).toBe(3)
    })

    it('test 2', () => {
        expect(maxMushrooms(4, ["W.W", "CWC", "W.W", "CWW"])).toBe(2)
    })

    it('test 3', () => {
        expect(maxMushrooms(4, ["W.W", "..C", "WW.", "C.."])).toBe(1)
    })
})