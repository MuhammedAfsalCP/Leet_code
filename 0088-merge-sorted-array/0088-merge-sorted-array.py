class Solution(object):
    def merge(self, nums1, m, nums2, n):
        nums1[m:] = []
        
        # Append nums2 elements
        nums1.extend(nums2[:n])
        
        # Sort the merged list
        nums1.sort()
        
        print(nums1)