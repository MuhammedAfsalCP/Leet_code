var singleNumber = function(nums) {
    let arr=[]
      for (let i = 0; i < nums.length; i++) {
        let count=0
        if (nums[i] != -100) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    nums[j] = -10
                    count++
                }
            }
            if (count==0) {
                arr.push(nums[i])
            }

        }
    }
    return arr
};