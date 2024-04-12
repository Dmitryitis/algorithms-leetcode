
function reverse(x: number): number {
    const lowerLimt: number = Math.pow(-2, 31);
    const upperLimit: number = Math.pow(2, 31) - 1;

    let stringNumber = `${x}`
    let hasDegreeSymbol = false


    if (stringNumber[0] === '-') {
        hasDegreeSymbol = true
        stringNumber = `${Math.abs(x)}`
    }

    const reverseNumber = stringNumber.split('').reverse().join('')

    const resultNumber = hasDegreeSymbol ? parseInt(`-${reverseNumber}`,10) : parseInt(reverseNumber.toString(), 10)

    if (resultNumber < lowerLimt || resultNumber > upperLimit) return 0;

    return resultNumber
}

export default  reverse