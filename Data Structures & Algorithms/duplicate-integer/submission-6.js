class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        for(let i=0; i<nums.length; i++){
            let key = nums[i]
            for(let j=i+1; j<nums.length; j++){
                if(key == nums[j]){
                    result = true
                    break;
                }
            }
        }
        return result
    }
}
