var findPeakElement = function(nums) {
    let m=nums[0];
    let n=0;
    for(let i=1;i<nums.length;i++){
        if(m<nums[i]){
            m=nums[i]
            n=i
        }
    }
    return n
};
