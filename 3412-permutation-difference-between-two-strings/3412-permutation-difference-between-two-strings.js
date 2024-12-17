/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let d=[]
    for (let i=0;i<s.length;i++){ 
     let a=t.indexOf(s[i])
       d.push(Math.abs(i-a))
    }
    return d.reduce((a,b)=>a+b,0)
};