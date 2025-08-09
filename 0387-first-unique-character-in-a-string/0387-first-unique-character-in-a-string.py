from collections import Counter
class Solution(object):
    def firstUniqChar(self, s):
        all=Counter(s)
        print(all)
        for x in s:
            if all[x]==1:
                return s.index(x)
        return -1
        
        