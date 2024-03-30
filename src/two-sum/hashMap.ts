function twoSum(nums: number[], target: number): number[] {
    const hashMap: Record<number, number> = {}
    let result = [0,1]

    nums.forEach((item: number, index:number) => {
        hashMap[nums[index]] = index
    })

    nums.forEach((item: number, index: number) => {
        const complement = target - item

        if (hashMap[complement] && index !== hashMap[complement]) {
            result = [index, hashMap[complement]]
            return;
        }
    })

    return  result
}

export  default twoSum