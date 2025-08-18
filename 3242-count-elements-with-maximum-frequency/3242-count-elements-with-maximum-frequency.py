from functools import reduce

class Solution(object):
    def maxFrequencyElements(self, nums):
        seen={}
        for x in nums:
            if x not in seen:
                seen[x]=1
            elif x in seen:
                seen[x]=seen[x]+1
        maximum = [list(seen.values())[0]]
        for x in list(seen.values())[1:]:
            if maximum[0] == x:
                maximum.append(x)
            elif maximum[0] < x:
                maximum[:] = [x]

        return reduce(lambda x, y: x + y, maximum)
        

        