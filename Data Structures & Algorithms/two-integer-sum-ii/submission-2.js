class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // let res = []
        // let map = new Map()
        // for(let i = 0; i < numbers.length; i++){
        //     if(!map.has(target - numbers[i])){
        //         map.set(numbers[i], i+1)
        //     }
        //     else{
        //         res.push(map.get(target - numbers[i]))
        //         res.push(i+1) 
        //     }
        // }
        // return res

        let left = 0
        let right = numbers.length-1
        let res = []

        while(left < right){
            if(numbers[left] + numbers[right] > target){
                right--
            }
            else if(numbers[left] + numbers[right] < target){
                left++
            }
            else{   
                res.push(left + 1)
                res.push(right + 1)
                break;
            }
        }
        return res
    }
}
