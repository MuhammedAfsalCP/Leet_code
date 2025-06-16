class Solution(object):
    def maximumDifference(self, nums):
        res=-1
        min=nums[0]
        for i in nums:
            if i <  min :
                min=i
            elif i> min:
                res=max(res,i-min)

        return  res

        