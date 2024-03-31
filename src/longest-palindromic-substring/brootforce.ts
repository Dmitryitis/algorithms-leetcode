function isPalindrome(s: string) {
    return s === s.split('').reverse().join('')
}

function longestPalindrome(s: string): string {
    if (s.length < 2)
        return s

    const unique = new Set(s)
    if (unique.size === 1) {
        return s
    }

    let startPos = 0
    let nextPos = 1

    let startCharSubstring = s[0]
    let longestSubstring = s[0]
    let curSubString = s[0] + s[1]


    while (startPos !== s.length - 1) {
        if (startCharSubstring === s[nextPos]) {
            if (isPalindrome(curSubString) && curSubString.length > longestSubstring.length) {
                longestSubstring = curSubString
            }
        }

        if (nextPos === s.length - 1) {
            startPos += 1
            nextPos = startPos + 1
            curSubString = s[startPos] + s[nextPos]
            startCharSubstring = s[startPos]
        } else {
            nextPos += 1
            curSubString += s[nextPos]
        }
    }

    return  longestSubstring
}

export default longestPalindrome