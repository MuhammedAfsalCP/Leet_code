class Solution(object):
    def search(self, nums, target):
        ans=-1
        left=0
        right=len(nums)-1
        
        while left<=right:
            mid=(left+right)//2
            if target==nums[mid]:
                ans=mid
                break
            elif target<nums[mid]:
                right=mid-1
            else:
                left=mid+1
        return ans
        