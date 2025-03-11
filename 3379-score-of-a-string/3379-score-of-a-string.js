/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
   let a=s.split("")
   let sum=[]
   let r=[]
   let w
   
   for(let i=0;i<a.length;i++){
     sum.push(a[i].charCodeAt())
   }
   for(let i=0;i<sum.length;i++){
     w=0;
    if(i<sum.length-1){
        w=Math.abs(sum[i]-sum[i+1])
        r.push(w)
    
    
   }
}
let y=r.reduce((acc,val)=>acc+=val,0)

    return y
    
};