var addDigits = function(num) {
    if(num>9){
     let a=String(num).split("").filter((x)=>x!=0);
    let b=a.join("").split("").map((x)=>Number(x)).reduce((acc,val)=>acc+=val,0)
    let c=String(b).split("").map((x)=>Number(x)).reduce((acc,val)=>acc+=val,0)
    let d=String(c).split("").filter((x)=>x!=0).map((x)=>Number(x)).reduce((acc,val)=>acc+=val,0)
    console.log(d)
    return d
   }else if(num>0){
    return num
   }else{
    return 0;
   }
   
};