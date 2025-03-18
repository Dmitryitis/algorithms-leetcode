function maxMushrooms(n: number, forest: string[]) {
    let maxMushrooms = 0
    let startPositions = [0,1,2]

    if (forest[0] === 'WWW') return 0;

    startPositions.forEach(startPoint => {
        let currentRow = 0
        let currentCol = startPoint
        let mushrooms = 0

        if (currentRow === 0 && forest[0][startPoint] === 'C') {
            mushrooms = 1
        }

        if (forest[0][startPoint] === 'C' || forest[0][startPoint] === '.') {
            while (currentRow !== n - 1) {
                const possibleMoves: Array<number[]> = []

                if (currentCol > 0 && forest[currentRow + 1][currentCol - 1] !== 'W') {
                    possibleMoves.push([currentRow + 1,currentCol - 1])
                }
                if (forest[currentRow +1][currentCol] !== 'W') {
                    possibleMoves.push([currentRow +1,currentCol])
                }
                if(currentCol < 2 && forest[currentRow + 1][currentCol + 1] !== 'W') {
                    possibleMoves.push([currentRow +1,currentCol+1])
                }

                maxMushrooms = Math.max(maxMushrooms, mushrooms)

                if (possibleMoves.length === 0) break;

                let [nextRow, nextCol] = possibleMoves[0]

                for (let i =0; i<possibleMoves.length; i++) {
                    if (forest[possibleMoves[i][0]][possibleMoves[i][1]] === 'C') {
                        mushrooms += 1
                        break;
                    }
                }

                currentRow = nextRow
                currentCol = nextCol
            }
        }

        maxMushrooms = Math.max(maxMushrooms, mushrooms)
    })

    return maxMushrooms
}

export default maxMushrooms