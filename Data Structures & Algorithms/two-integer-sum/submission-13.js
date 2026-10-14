class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let j = 0;
        let key = nums[j];
        let res = [];
        for(let i = 0; i<nums.length; i++, j++){
            if(nums.includes(target-nums[j], i+1) /*&& nums.indexOf(target-nums[j])!== j*/){
                res[0] = j;
                res[1] = nums.lastIndexOf(target-nums[j])
                break;
            }
        }
        return res
    }
}
