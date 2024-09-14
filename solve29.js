var divide = function(dividend, divisor) {
    let c=dividend/divisor
    console.log(c)
    let d
   if(dividend<0&&divisor==-1){
    if(dividend==-1){
        d=c
    }else{
        d=c-1
    }
   }else{
    if(c<0){
    d=Math.ceil(c)
   }else{
    d=Math.floor(c)
   }
   }
    console.log(d)
    return d
};