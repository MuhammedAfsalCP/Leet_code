var subtractProductAndSum = function(n) {
    let a=String(n).split("").map((val)=>Number(val))
    let b=a.reduce((acc,val)=>acc*val)
    let c=a.reduce((acc,val)=>acc+val,0)
   return b-c

};