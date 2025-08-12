class Solution(object):
    def reverseString(self, s):
        a=[s[x] for x in range(len(s)-1,-1,-1)]
        for x in range(len(a)):
            s[x]=a[x]
        
        