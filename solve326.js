var isPowerOfThree = function(n) {
    if(n==0){
        return false
    }while(n%3==1){
        n=n/3
    }
    return n==1?true:false
};