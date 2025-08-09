class Solution(object):
    def removeDuplicates(self, nums):
        seen=set()
        for x in nums:
            if x not in seen:
                seen.add(x)
        nums[:]=sorted(list(seen))

        