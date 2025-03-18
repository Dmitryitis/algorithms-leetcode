import {describe, it, expect} from 'vitest'
import {threeSum} from './brootforce'


describe('3sum', () => {
    it('test 1', () => {
        const numbers = [-1,0,1,2,-1,-4]

        expect(threeSum(numbers)).toStrictEqual([[-1,0,1],[-1,-1,2]])
    })
    it('test 2', () => {
        const numbers = [0,1,1]

        expect(threeSum(numbers)).toStrictEqual([])
    })
    it('test 3', () => {
        const numbers = [0,0,0]

        expect(threeSum(numbers)).toStrictEqual([[0,0,0]])
    })
    it('test 4', () => {
        const numbers = [-2,0,1,1,2]

        expect(threeSum(numbers)).toStrictEqual([[-2,0,2],[-2,1,1]])
    })
    it('test 5', () => {
        const nums = [1,2,-2,-1]

        expect(threeSum(nums)).toStrictEqual([])
    })
    it('test 6', () => {
        const nums = [2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]

        expect(threeSum(nums)).toStrictEqual([[-3,1,2],[-2,0,2],[-4,2,2],[-3,-2,5],[-5,0,5],[-10,5,5]])
    })
})