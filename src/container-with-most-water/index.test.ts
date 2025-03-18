import {describe, it, expect} from "vitest";
import maxArea from './brootforce'

describe('container with most water', () => {
    it('test 1', () => {
        const heights = [1,8,6,2,5,4,8,3,7]
        expect(maxArea(heights)).toBe(49)
    })

    it('test 2', () => {
        const heights = [1,1]
        expect(maxArea(heights)).toBe(1)
    })

    it('test 3', () => {
        const height = [1,2,4,3]

        expect(maxArea(height)).toBe(4)
    })

    it('test 4', () => {
        const height = [2,3,4,5,18,17,6]

        expect(maxArea(height)).toBe(17)
    })

    it('test 5', () => {
        const height = [1,3,2,5,25,24,5]

        expect(maxArea(height)).toBe(24)
    })
})