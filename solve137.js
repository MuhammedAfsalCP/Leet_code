var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let count=0
        if (nums[i] != -1) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    nums[j] = -1
                    count++
                }
            }
            if (count==0) {
                console.log(i)
                return nums[i]
                break
            }

        }
    }
};