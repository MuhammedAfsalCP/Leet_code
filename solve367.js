var isPerfectSquare = function(num) {
    let flag=0
    for(let i=1;i<=num/2;i++){
        if(i*i==num){
            flag=1
            break;
        }else{
            flag=0;
        }
    }
    if(flag==1||num==1){
        return true
    }else{
        return false
    }
};