var reverse = function(x) {
    if(x<0){
     return -1*reverse(-x)
    }
    let a=(x+"").split('').reverse().join('')
    
    return (a> 2**31 -1)?0:parseInt(a);
 }