
function changeSymbols(s: string) {
    if (s === ' ') return 'space'

    return  s
}

function lengthOfLongestSubstring(s: string): number {
    const hashMap: Map<string, number> = new Map()
    let count = 0
    let maxCount = 0
    let curIndex = 0
    let realIndex = 0

    while (curIndex !== s.length && realIndex !== s.length) {
        if (hashMap.has(changeSymbols(s[curIndex]))) {
            if (count > maxCount) {
                maxCount = count
            }

            count = 0
            realIndex += 1
            curIndex = realIndex
            hashMap.clear()
        } else {
            hashMap.set(changeSymbols(s[curIndex]), 1)
            count += 1
            curIndex += 1
        }
    }

    if (count !== 0 && count > maxCount) maxCount = count

    return  maxCount
}

export default lengthOfLongestSubstring