import { expect, describe, it } from 'vitest';
import {addTwoNumbers,numberToListNode, ListNode} from './brootforce'
import {addTwoNumbers as addTwoNumbersCarry} from './carry'


describe('add two numbers brootforce', () => {
    it('test 1', () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

        const excepted = new ListNode(7, new ListNode(0, new ListNode(8)))
        expect(addTwoNumbers(l1,l2)).toEqual(excepted)
    })

    it('test 2', () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(9)))
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))

        const excepted = new ListNode(7, new ListNode(0, new ListNode(4, new ListNode(0, new ListNode(1)))))
        expect(addTwoNumbers(l1,l2)).toEqual(excepted)
    })

    it('test 3', () => {
        const l1 = numberToListNode(BigInt('100 000 000 000 000 000 000 000 000 000 1'.replaceAll(" ", '')), false)
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

        const excepted = numberToListNode(BigInt('6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1'.replaceAll(',', '')), false)
        expect(addTwoNumbers(l1,l2)).toEqual(excepted)
    })
})

describe('add two numbers carry', () => {
    it('test 1', () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

        const excepted = new ListNode(7, new ListNode(0, new ListNode(8)))
        expect(addTwoNumbersCarry(l1,l2)).toEqual(excepted)
    })

    it('test 2', () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(9)))
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))

        const excepted = new ListNode(7, new ListNode(0, new ListNode(4, new ListNode(0, new ListNode(1)))))
        expect(addTwoNumbersCarry(l1,l2)).toEqual(excepted)
    })

    it('test 3', () => {
        const l1 = numberToListNode(BigInt('100 000 000 000 000 000 000 000 000 000 1'.replaceAll(" ", '')), false)
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

        const excepted = numberToListNode(BigInt('6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1'.replaceAll(',', '')), false)
        expect(addTwoNumbersCarry(l1,l2)).toEqual(excepted)
    })
})