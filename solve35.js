var searchInsert = function (nums, target) {
    let flag;
    let m=target;
    if (target != 0) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                console.log(i);
                flag = 3
                break;
            } else {
                u = 0;
                flag = 0;
            }
        }
        if(flag==0){
            target--;
            for(let j=0;j<nums.length;j++){
                if(nums[j]==target){
                    console.log(j+1)
                    flag = 0;
                  break;
                }else {
                        flag = 1;
                  }
            }
        }
        if (flag == 1) {
           
           
            m++;
            for (let k = 0; k < nums.length; k++) {
                if (nums[k] == m) {
                    console.log(k);
                    
                    break;
                }
            }
        }
       
    } else {
        console.log(0);
    }
}
searchInsert([3,6,7,8,10],5)