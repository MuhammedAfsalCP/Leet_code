var differenceOfSums = function(n, m) {
    let arr=[]
    let arr2=[]
    for(let i=1;i<=n;i++){
      if(i%m !==0){
        arr.push(i)
      }else{
        arr2.push(i)
      }
    }
    console.log(arr2)
    let sum1=arr.reduce((acc,val)=>acc+val,0)
    let sum2=arr2.reduce((acc,val)=>acc+val,0)
    console.log(sum2)
    return sum1-sum2
};