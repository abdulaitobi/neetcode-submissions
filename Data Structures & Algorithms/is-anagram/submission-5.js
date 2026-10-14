class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var arrT = [];
        if(t.length == s.length){
            for(let i = 0; i<t.length; i++){
                arrT.push(t.charAt(i))
            }
            for(let i = 0; i<t.length; i++){
                arrT[arrT.indexOf(s.charAt(i))] = null;
            }
            if(arrT.every(val=> val == null )){
                console.log(arrT)
                return true;
            }
            else{
                console.log(arrT)
                return false;
            }
        }
        else{
            return false;
        }
    }
}
