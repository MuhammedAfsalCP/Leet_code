/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
    let arr=[]
    for (let i=0;i<nums.length;i+=2){
        let a=nums[i]
        for(let j=1;j<=a;j++){
            arr.push(nums[i+1])
        }
        
    }
    return arr
};