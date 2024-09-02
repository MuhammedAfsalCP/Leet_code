var missingNumber = function(nums) {
    let count=0
    let sum=0
    let miss=0
   for(let i=1;i<=nums.length;i++){
    count=count+i
   }
   for(let i=0;i<nums.length;i++){
    sum+=nums[i]
   }
   miss=count-sum
   return miss
};