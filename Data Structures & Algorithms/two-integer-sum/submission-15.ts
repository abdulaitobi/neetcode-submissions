class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map;
        let output = []

        for(let i = 0; i < nums.length; i++){
            let current  = target - nums[i]
            if(map.has(current)){
                if(map.get(current) < i){
                    output = [map.get(current), i]
                }
                else{
                    output = [i, map.get(current)]
                }
            }
            else{
                map.set(nums[i], i)
            }
        }
        return output
    }
}
