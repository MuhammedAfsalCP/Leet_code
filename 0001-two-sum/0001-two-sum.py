class Solution(object):
    def twoSum(self, nums, target):
        seen={}
        for x in range(len(nums)):
            diff=target-nums[x]
            if diff in seen:
                return [seen[diff],x]
            seen[nums[x]]=x
        