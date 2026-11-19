class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numbers = new Set(nums);
        let longest = 0
        for (let num of numbers) {
            
            if(!numbers.has(num-1)){
                let current = num;
                var length = 1;

                while (numbers.has(current + 1)) {
                    current++;
                    length++;
                }
                if (longest < length) {
                    longest = length;
                }
            }
        }
        return longest
    }
}
