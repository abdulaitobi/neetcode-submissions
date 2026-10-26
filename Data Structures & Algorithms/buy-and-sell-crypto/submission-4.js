class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let arr = []
        let max = 0

        for(let i = 0; i < prices.length; i++){
            arr.push(prices[i])
            if(prices[i] - Math.min(...arr) > max){
                max = prices[i] - Math.min(...arr)
            }
        }
        return max
    }
}
