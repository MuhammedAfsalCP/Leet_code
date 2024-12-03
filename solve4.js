var findMedianSortedArrays = function(nums1, nums2) {
    let nums3=[...nums1,...nums2].sort((a,b)=>a-b)
     let len=nums3.length/2
     len=Math.round(len)
     if(nums3.length%2!=0){
         let c=parseFloat(nums3[len-1])
         return c
     }else{
         let c=(nums3[len-1]+nums3[len])/2
         return c
     }
 };