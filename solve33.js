var search = function(nums, target) {
    let b=[]
  for(let i=0;i<nums.length;i++){
    if(nums[i]==target){
        b.push(i)
    }
  }
  if(b.length==0){
    return -1
  }else{
     return b
  }
};