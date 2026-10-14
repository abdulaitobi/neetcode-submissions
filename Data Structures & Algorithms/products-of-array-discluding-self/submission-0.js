class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1
        let zeros = 0
        for(let i = 0; i < nums.length; i++){
            if(nums[i] != 0){
                product *= nums[i]
            }
            else{
                zeros++;
            }
            
        }

        if(zeros > 1){
            return Array(nums.length).fill(0)
        }
        
        const output = []

        for(let i = 0; i < nums.length; i++){
            if(zeros > 0){
                output.push(nums[i] === 0 ? product : 0)
            }
            else{
                output.push(product / nums[i])
            }
        }
        return output
    }
}
