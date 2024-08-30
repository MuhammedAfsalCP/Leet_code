var findMin = function(nums) {
    let n=[nums[0]]
    for(let i=1;i<nums.length;i++){
        if(n>nums[i]){
            n=nums[i];
        }
    }
    return n
};