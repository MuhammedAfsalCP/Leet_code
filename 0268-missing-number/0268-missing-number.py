class Solution(object):
    def missingNumber(self, nums):
        total_sum=sum(range(1,len(nums)+1))
        curr_sum=sum(nums)
        return total_sum-curr_sum

        