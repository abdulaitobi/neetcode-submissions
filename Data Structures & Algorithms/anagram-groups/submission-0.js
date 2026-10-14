class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map()

        for(let i  = 0; i < strs.length; i++){
            let arr = Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++){
                arr[strs[i].charCodeAt(j) - "a".charCodeAt(0)] += 1
            }
        const key = JSON.stringify(arr);
        if (!res.has(key)) {
            res.set(key, []);
        }
        res.get(key).push(strs[i]);
    }

    return Array.from(res.values());
    }
}
