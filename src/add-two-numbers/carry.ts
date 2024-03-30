export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let curr = dummy

    let carry = 0

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 && l1.val ? l1.val : 0
        const val2 = l2 && l2.val ? l2.val : 0

        let val = val1 + val2 + carry

        carry = Math.floor(val / 10)
        val = val % 10

        curr.next = new ListNode(val)
        curr = curr.next

        if (l1 && l1.next) l1 = l1.next
        else l1 = null

        if (l2 && l2.next) l2 = l2.next
        else l2 = null

        console.log(l1)
    }

    return dummy.next
}