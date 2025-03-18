
export const threeSum = (nums: number[]): number[][] => {
    const mapThree = new Map<string, number[]>()
    const lengthNums = nums.length;
    const maxIndex = lengthNums - 1
    let currentIndex = 0;

    if (lengthNums < 3) {
    return []
    }

     if (lengthNums === 3 && nums.every(item => item === 0)) {
        return [[0,0,0]]
    }

    while (currentIndex !== lengthNums - 2) {
        for (let i=currentIndex+1; i < lengthNums-1; i++) {
            const secondIndex = i
            for(let j=i+1;j < lengthNums; j++) {
                const thirdIndex = j

                if (secondIndex <= maxIndex && thirdIndex <= maxIndex) {
                    const newTuple = [nums[currentIndex], nums[secondIndex], nums[thirdIndex]]
                    const sumTuple = newTuple.reduce((acc, tuple) => acc + tuple, 0)
                    const sortTuple = newTuple.sort((a,b) => a - b).join('')
                    if (sumTuple === 0 && !mapThree.has(sortTuple)) {
                        mapThree.set(sortTuple, newTuple)
                    }
                }
            }
        }
        currentIndex += 1;
    }

    return mapThree.size > 0 ? Array.from(mapThree.values()) : []
}