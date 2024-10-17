var duplicateNumbersXOR = function(nums) {
    
    let a=[]
    for(let i=0;i<nums.length;i++){
        let flag=0;
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]&&i!=j){
                a.push(nums[i])
                flag=1;
                break
            }else{
                flag=0;
            }
        }
        
    }
    
    if(a.length!=0){
        
        let sum = a.reduce((acc, val) => acc ^ val, 0);
        return sum
    }else{
        return 0
    }
};