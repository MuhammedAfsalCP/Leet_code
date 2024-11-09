var majorityElement = function(nums) {
    let a=0;
    c=0;
    for(let i=0;i<nums.length;i++){
        count=0;
        if(nums[i]!=-1){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]==nums[j]){
                    count++;
                    nums[j]=-1
                }
            }
            if(count!=0){
                if(a<count){
                    console.log(count)
                    a=count
                    c=nums[i]
                }
            }
        }
    }
    if(a==0){
        return nums[0]
    }else{
        return c
    }
};