class Solution(object):
    def intersection(self, nums1, nums2):
        nums1=sorted(nums1)
        nums2=set(nums2)
        ans=[]
        for x in nums2 :
            left=0
            right=len(nums1)-1
            
            while left<=right:
                mid=(left+right)//2
                if x == nums1[mid]:
                    ans.append(x)
                    break
                elif x<nums1[mid] :
                    right=mid-1
                else:
                    left=mid+1

        return ans
                



        