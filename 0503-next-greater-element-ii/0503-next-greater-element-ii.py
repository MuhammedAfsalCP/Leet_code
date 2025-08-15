class Solution(object):
    def nextGreaterElements(self, nums):
        
        n = len(nums)
        res = [-1] * n
        stack=[]
        for i in range(2 * n):
            current = nums[i % n]
            while stack and nums[stack[-1]]<current:
                res[stack.pop()]=current
            if i<n:
                stack.append(i)
        return res

            