class Solution(object):
    def reverseString(self, s):
        s[:]=[s[x] for x in range(len(s)-1,-1,-1)]
        