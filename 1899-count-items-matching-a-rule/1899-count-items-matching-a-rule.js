/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let a
    if(ruleKey=='type'){
        a=0
    }else if(ruleKey=='color'){
        a=1
    }else if(ruleKey=='name'){
        a=2
    }
    count=0
    for(let i=0;i<items.length;i++){
        if(items[i][a]==ruleValue){
              count++
        }
    } 
    return count
};