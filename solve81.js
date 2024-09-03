var search = function(nums, target) {
    let flag
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
          flag=1;
          break;
        }else{
            flag=0;
        }
    }
    if(flag==1){
        return true
    }else{
        return false
    }
    
};