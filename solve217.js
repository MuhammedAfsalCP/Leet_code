var containsDuplicate = function(nums) {
    const a=new Set(nums)
    if(a.size==nums.length){
        return false
    }else{
        return true
    }
};