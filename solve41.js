var firstMissingPositive = function(nums) {
    let b=nums.sort((a,b)=>a-b)
    let obj=new Set(b)
    b=[...obj]
    b=b.filter((val)=>val>0)
 let c=0
  if(b[0]!=1){
     return 1
  }for(let i=0;i<=b.length;i++){
  if(b[i]+1 != b[i+1]){
     return b[i]+1
    break;
  }
 }
 return -1
 };