var singleNumber = function(nums) {
    let flag
    for(let i=0;i<nums.length;i++){
     if(nums[i]!=-100){
         flag=0;
         for(let j=i+1;j<nums.length;j++){
             if(nums[i]==nums[j]){
                 flag=1;
                 nums[j]=-100
             }
         }
         if(flag==0){
             return nums[i]
         }
     }
    }
 };