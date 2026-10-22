class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length-1
        let res = 0

        while(left < right){
            let width = right - left
            let length = 0

            if(heights[left] < heights[right]){
                length = heights[left]
                left ++
            }
            else{
                length = heights[right]
                right --
            }

            if(length * width > res){
                res = length * width
            }
        }
        return res
    }
}
