

function myAtoi(s: string): number {
    const lowerLimt: number = Math.pow(-2, 31);
    const upperLimit: number = Math.pow(2, 31) - 1;
    let sign: string | null = null

    const reg = /[+-]?\d+/g
    let number = 0

    if (s.match(reg)) {
        const match= s.match(reg)

        if (match && match.length > 0) {
            let strWithNumber = match[0]

            if (strWithNumber[0] === '-') {
                sign = strWithNumber[0]
                strWithNumber = strWithNumber.substring(1, strWithNumber.length)
            } else if (strWithNumber[0] === '+') {
                sign = strWithNumber[0]
                strWithNumber = strWithNumber.substring(1, strWithNumber.length)
            }

            number = parseInt(sign ? sign + strWithNumber : strWithNumber, 10)
        }
    }

    if (number < lowerLimt) return lowerLimt
    else if (number > upperLimit) return  upperLimit


    return number
}

export  default myAtoi