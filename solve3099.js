var sumOfTheDigitsOfHarshadNumber = function(x) {
    let a=String(x)
    let arr=a.split("")
    arr=arr.map((x)=>Number(x)).reduce((acc,val)=>acc+val,0)
    if(x%arr==0){
      return arr
    }else{
      return -1
    }
  };