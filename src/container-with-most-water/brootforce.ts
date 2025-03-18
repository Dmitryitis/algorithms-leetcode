function calcArea(startHeight: number, endHeight: number, diff: number) {
    return diff*Math.min(startHeight, endHeight)
}

function maxArea(height: number[]): number {
    let startPos = 0
    let endPos = height.length - 1
    let result = 0;

    if (height.length === 2) return Math.min(height[0], height[1])

    while (startPos < endPos) {
        if (calcArea(height[startPos], height[endPos], endPos - startPos) > result) {
            result = calcArea(height[startPos], height[endPos], endPos - startPos)
        }

        if (height[startPos]<=height[endPos]) {
            startPos += 1
        } else if (height[startPos] > height[endPos]) endPos -=1
    }

    return  result
}

export  default maxArea