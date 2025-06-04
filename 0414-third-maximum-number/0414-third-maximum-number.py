class Solution(object):
    def thirdMax(self, nums):
        nums=set(nums)
        nums=sorted(nums)
        nums2=sorted(nums,reverse=True)
        if len(nums)<3:
            return nums[len(nums)-1]
        else :
            return nums2[2]