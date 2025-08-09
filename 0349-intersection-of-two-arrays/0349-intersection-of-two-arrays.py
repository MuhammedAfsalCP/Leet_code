class Solution(object):
    def intersection(self, nums1, nums2):
        seen=set()
        for x in nums1:
            if x not in seen and x in nums2:
                seen.add(x)
        return list(seen)
                



        