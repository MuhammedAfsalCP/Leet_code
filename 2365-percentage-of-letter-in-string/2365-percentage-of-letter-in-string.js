/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count=0
    for (let i=0;i<s.length;i++){
        if(letter==s[i]){
            count++
        }
    }
    if(count==0){
        return 0
    }else{
        sum=count/s.length*100
        return Math.floor(sum)
    }
};