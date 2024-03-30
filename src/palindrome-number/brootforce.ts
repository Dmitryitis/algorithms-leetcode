

export function isPalindrome(x: number): boolean {
    const reverseX: string = `${x}`.split('').reverse().join('')

    return  reverseX === `${x}`
}