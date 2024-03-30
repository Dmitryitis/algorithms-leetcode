import { expect, describe, it } from 'vitest'
import twoSum from './index'


describe('two sum', () => {
    it('test 1', () => {
        const nums = [2,7,11,15]
        const target = 9
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining([0,1]))
    })

    it('test 2', () => {
        const nums = [3,2,4]
        const target = 6
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining([1,2]))
    })

    it('test 3', () => {
        const nums = [3,3]
        const target = 6
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining([0,1]))
    })

    it('test 4', () => {
        const nums = [2,5,5,1]
        const target = 10
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining([1,2]))
    })

    it('test 5', () => {
        const nums = [0,4,3,0]
        const target = 0
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining([0,3]))
    })
})