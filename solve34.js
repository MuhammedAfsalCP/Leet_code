var searchRange = function(nums, target) {
    let b=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
          b.push(i)
        }
    }
    if(b.length==0){
        return [-1,-1]
    }else{
        if(b.length==1){
            b.push(b[1])
            return b
        }else{
            return [b[0],b[b.length-1]]
        }
    }
};