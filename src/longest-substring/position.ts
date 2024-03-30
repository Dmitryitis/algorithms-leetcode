function lengthOfLongestSubstring(s: string): number {
    let length = 0

    let characterMap: Map<string, number> = new Map()

    let leftIndex = 0

    for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {

        const character = s[rightIndex]

        // @ts-ignore
        if (characterMap.has(character) && characterMap.get(character) >= leftIndex) {
            // @ts-ignore
            leftIndex = characterMap.get(character) + 1
        }
        length = Math.max(length, rightIndex - leftIndex + 1)

        characterMap.set(character, rightIndex)
    }

    return length
}

export  default lengthOfLongestSubstring