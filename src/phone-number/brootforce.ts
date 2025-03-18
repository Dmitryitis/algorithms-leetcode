export function letterCombinations(digits: string): string[] {
    const mapPhoneNumberToLetter: Record<string, string> = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }


    if (!digits.length) return []

    if (digits.length === 1) return mapPhoneNumberToLetter[digits].split('') ?? []

    const combinations: string[] = []

    function backtrack(combination: string, nextDigits: string) {
        if (nextDigits.length === 0) {
            combinations.push(combination);
        } else {
            const letters: string = mapPhoneNumberToLetter[nextDigits[0]];
            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1));
            }
        }
    }

    backtrack("", digits)

    return combinations
};