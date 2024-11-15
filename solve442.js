var findDuplicates = function(nums) {
    let a=new Set()
    let b=[]
   for(let i=0;i<nums.length;i++){
    if(a.has(nums[i])){
        b.push(nums[i])
    }else{
        a.add(nums[i])
    }
   }
   return b
};