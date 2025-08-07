class Solution(object):
    def removeDuplicates(self, nums):
        set1=set()
        count=1
        i=0
        while (i<len(nums)):
            if nums[i] in set1:
                count+=1
                nums.pop(i)
            else:
                set1.add(nums[i])
                i+=1
        print(set1)

        