class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        nums.sort()
        a=len(nums)
        return nums[a-k]
     