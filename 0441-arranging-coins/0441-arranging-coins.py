class Solution(object):
    def arrangeCoins(self, n):
        i=1
        ans=0
        j=2
        while i<=n:
            ans+=1
            i+=j
            j+=1
        return ans

        