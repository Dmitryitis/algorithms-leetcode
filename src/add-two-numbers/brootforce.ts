
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export const recursiveSum = (listNode: ListNode | null, result: string): string => {
    if (!listNode) return result
    result += listNode.val.toString()

    return  recursiveSum(listNode.next, result)
}

export function numberToListNode (num: BigInt, reverse=true): ListNode | null {
    let digits: number[] = [];
    if (reverse) digits = Array.from(num.toString()).reverse().map(Number)
    else digits = Array.from(num.toString()).map(Number)

    let head: ListNode | null = null
    let current: ListNode | null = null

    digits.forEach((item: number) => {
        const newNode = new ListNode(item)

        if (head === null) {
            head = newNode
            current = newNode
        } else {
            if (current)
            current.next = newNode;
            current = newNode;
        }
    })

    return head
}

// Лучше решение с carry превосходит 78,09%
// пользователей, использующих TypeScript
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const numL1 = BigInt(recursiveSum(l1, '').split('').reverse().join(''))
    const numL2 = BigInt(recursiveSum(l2, '').split('').reverse().join(''))

    const sum = numL1 + numL2

    return numberToListNode(sum)
}