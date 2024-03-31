function recordMap (column: number, char: string, hashMap: Map<number, string>) {
    if (hashMap.has(column)) {
        hashMap.set(column, hashMap.get(column) + char)
    } else hashMap.set(column, char)
}

function updateCount (countColumn:number, countDiagonal: number, options: {
    maxDiagonal: number
    maxRows: number
}) {
    if (countColumn === options.maxRows && options.maxRows === 2) {
        return true
    }

    if (countColumn === options.maxRows && countDiagonal === 0) {
        return true
    }

    return false
}

function isLastColumn (countColumn: number, numRows: number) {
    return countColumn === numRows
}
function convert(s: string, numRows: number): string {
    if (numRows === 1) return  s

    let result = ''

    const lettersInDiagonal =  numRows - 2

    const hashMap: Map<number, string> = new Map()
    let countColumn = 0
    let countDiagonal = lettersInDiagonal

    s.split('').forEach((item: string, index: number) => {
        const isUpdate = updateCount(countColumn, countDiagonal, {maxRows: numRows, maxDiagonal: lettersInDiagonal})

        if (isUpdate) {
            countDiagonal = lettersInDiagonal
            countColumn = 0
        }

        if (!isLastColumn(countColumn, numRows)) {
            recordMap(countColumn, item, hashMap)
            countColumn += 1
        }  else if (isLastColumn(countColumn, numRows) && countDiagonal > 0) {
            recordMap(countDiagonal, item, hashMap)
            countDiagonal -= 1
        }
    })

    for (const value of hashMap.values()) {
        result += value
    }

    return result
}

export default convert