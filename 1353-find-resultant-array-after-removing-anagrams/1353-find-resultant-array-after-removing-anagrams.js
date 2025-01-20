/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    for (let i=1;i<words.length;i++){
        let words1=words[i-1].split("").sort().join("")
        let words2=words[i].split("").sort().join("")
        if(words1==words2){
            words.splice(i,1)
            i--
        }
    }
    return words
};