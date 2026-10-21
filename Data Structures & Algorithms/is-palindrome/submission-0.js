class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0
        let right  = s.length-1
        while(left < right){
            if((s.charCodeAt(left) < 48 || s.charCodeAt(left) > 57) && (s.charCodeAt(left) < 97 || s.charCodeAt(left) > 122)){
                left++
            }
            else if((s.charCodeAt(right) < 48 || s.charCodeAt(right) > 57) && (s.charCodeAt(right) < 97 || s.charCodeAt(right) > 122)){
                right--
            }
            else{
                if(s.charAt(right) != s.charAt(left)){
                    return false
                }
                else{
                    left++
                    right--
                }
            }
        }
        return true
    }
}
