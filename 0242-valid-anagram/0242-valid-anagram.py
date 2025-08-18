class Solution(object):
    def isAnagram(self, s, t):
        if len(s)==len(t):
            s=sorted(s)
            t=sorted(t)
            if s==t:
                return True
            else:
                return False
        else:
            return False
        