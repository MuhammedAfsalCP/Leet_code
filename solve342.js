var isPowerOfFour = function (n) {
    let flag
    if(n==0){
        return false
    }while(n%4==0){
        n=n/4
    }
    return n==1?true:false
};