var averageValue = function(nums) {
    let a=nums.filter((val)=>val%2==0&&val%3==0)
   let b=a.length
 if(b==0){
    return 0;
 }else{
      a=a.reduce((acc,val)=>acc+val,0)
   return Math.floor(a/b)
 }
    
};