class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let phrase = ""

        for(let i = 0; i < strs.length; i++){
            phrase += strs[i].length + "#" + strs[i]
        }
        return phrase
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        while (str.charAt(j) != "#") {
            j++;
        }

        let length = parseInt(str.slice(i, j));

        let phrase = str.slice(j + 1, j + 1 + length);

        result.push(phrase);

        i = j + 1 + length;
    }

    return result;
}
}
