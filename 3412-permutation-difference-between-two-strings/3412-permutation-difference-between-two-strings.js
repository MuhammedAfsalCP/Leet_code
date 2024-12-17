/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let b
    let d=[]
    for (let i=0;i<s.length;i++){
        b=i
     let a=t.indexOf(s[i])
     console.log(b)
       d.push(Math.abs(b-a))
    }
    return d.reduce((a,b)=>a+b,0)
};