function twoSum(nums: number[], target: number): number[] {
    let diff = target
    const allIndex = nums.length - 1
    let startIndex = 0
    let nextIndex = startIndex + 1 !== nums.length ? startIndex + 1 : allIndex

    while (target - (nums[startIndex] + nums[nextIndex]) !== 0) {
        if ((diff - (nums[startIndex] + nums[nextIndex])) === 0) {
            diff = 0
        } else {
            if (nextIndex !== allIndex) nextIndex += 1
            else if (nextIndex === allIndex) {
                if (startIndex !== allIndex) startIndex += 1
                nextIndex = startIndex + 1 !== nums.length ? startIndex + 1 : allIndex
            }
            else break
        }
    }

    return [startIndex, nextIndex]
}

export default twoSum