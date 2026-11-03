class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let result = []

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i]) + 1)
            }
            else{
                map.set(nums[i], 1)
            }
        }

        let arr = Array.from(map)
        arr.sort((a, b) => b[1] - a[1]);

        for(let i = 0; i < k; i++){
           result.push(arr[i][0]) 
        }

        return result
    }
}
