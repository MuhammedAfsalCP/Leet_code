class Solution(object):
    def countElements(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        min1=min(nums)
        max1=max(nums)
        count =0
        for x in nums:
            if x != min1 and x!=max1:
                count+=1
        return count

        