class Solution(object):
    def searchRange(self, nums, target):
        index=[]
        for x in range(len(nums)):
            if nums[x] == target:
                index.append(x)
        if len(index)>1:
            return [index[0],index[-1]]
        elif len(index)==1:
            return [index[0],index[0]]
        else:
            return [-1,-1]

        