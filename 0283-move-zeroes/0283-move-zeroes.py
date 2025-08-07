class Solution(object):
    def moveZeroes(self, nums):
        lenth=len(nums)
        last=0
        i=0
        while(i<lenth):
            if nums[i]!=0:
                nums[last],nums[i]=nums[i],nums[last]
                last+=1
            i+=1
            

        