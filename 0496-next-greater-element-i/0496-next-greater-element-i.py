class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        a=[]
        for x in nums1:
            index=nums2.index(x)
            found = False
            while (index < len(nums2) - 1 ):
                if x<nums2[index+1]:
                    a.append(nums2[index+1])
                    found=True
                    break
                index+=1
            if not found:
                a.append(-1)
        return a
        