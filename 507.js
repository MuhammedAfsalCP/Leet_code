var checkPerfectNumber = function(num) {
    let a=[]
    for(let i=1;i<=num/2;i++){
        if(num%i==0){
            a.push(i)
        }
    }
    a=a.reduce((acc,val)=>acc+val,0)
    if(num==a){
        return true
    }else{
        return false
    }
};