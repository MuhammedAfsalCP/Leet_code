var findDuplicate = function(nums) {
    let d=new Set()
    for(let i=0;i<nums.length;i++){
       if(d.has(nums[i])){
           return nums[i]
       }else{
           d.add(nums[i])
       }
    }
}