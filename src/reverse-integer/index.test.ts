import {describe, it, expect} from 'vitest'

import reverse from './brootforce'

describe('reverse integer', () => {
    it('test 1', () => {
        const x = 123
        expect(reverse(x)).toBe(321)
    })

    it('test 2', () => {
        const x = -123
        expect(reverse(x)).toBe(-321)
    })

    it('test 3', () => {
        const x = 120
        expect(reverse(x)).toBe(21)
    })

    it('test 4', () => {
        const x = 1534236469

        expect(reverse(x)).toBe(0)
    })
})