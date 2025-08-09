class Solution(object):
    def moveZeroes(self, nums):
        pos=0
        for x in nums:
            if x !=0:
                nums[pos]=x
                pos+=1
            
        while(pos<len(nums)):
            nums[pos]=0
            pos+=1
            

        