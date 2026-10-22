class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let res = []
        let map = new Map()
        for(let i = 0; i < numbers.length; i++){
            if(!map.has(target - numbers[i])){
                map.set(numbers[i], i+1)
            }
            else{
                res.push(map.get(target - numbers[i]))
                res.push(i+1) 
            }
        }
        return res
    }
}
