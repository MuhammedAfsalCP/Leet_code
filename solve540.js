var singleNonDuplicate = function(nums) {
    let d;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=-1){
            let flag=0
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]==nums[j]){
                 
                  flag++
                  nums[j]=-1
                }
            }
            if(flag==0){
                d=nums[i]
            }
        }
    }
    return d
};