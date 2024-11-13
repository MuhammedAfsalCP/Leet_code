var moveZeroes = function(nums) {
    let a=nums.filter((val)=>val!=0)
    let c=a.length
    let b=nums.length;
    let d=[]
    for(let i=0;i<b;i++){
        if(i<c){
            d.push(a[i])
        }else{
            d.push(0)
        }
    }
    nums.length=0
    nums.push(...a)
    console.log(nums)
};