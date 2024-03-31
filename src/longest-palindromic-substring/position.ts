

function longestPalindrome(s: string): string {
    if (s.length < 2)
        return s

    const unique = new Set(s)
    if (unique.size === 1) {
        return s
    }

    let longestSubstring = ''

    for (let i=0; i <= s.length; i++) {
        let left = i
        let right = i

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const current = s.substring(left, right + 1)
            if (current.length > longestSubstring.length) {
                longestSubstring = current
            }

            left--
            right++
        }

        left = i;
        right = i + 1;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const current = s.substring(left, right + 1);
            if (current.length > longestSubstring.length) {
                longestSubstring = current;
            }
            left--;
            right++;
        }
    }


    return  longestSubstring
}

export  default  longestPalindrome