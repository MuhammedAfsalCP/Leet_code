/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let a=[]
    for(let i=0;i<nums1.length;i++){
     let count=0;
      let b=nums2.includes(nums1[i])
      if(b==false){
      let c=nums3.includes(nums1[i]) 
      if(c){
        console.log(nums1[i])
        a.push(nums1[i])
      }
      }else{
        a.push(nums1[i])
      }
    }
    for(let i=0;i<nums2.length;i++){
     let count=0;
      let b=nums1.includes(nums2[i])
      if(b==false){
      let c=nums3.includes(nums2[i]) 
      if(c){
        a.push(nums2[i])
      }
      }
    }
    let b=new Set(a)
    a=[...b]
    return a
};