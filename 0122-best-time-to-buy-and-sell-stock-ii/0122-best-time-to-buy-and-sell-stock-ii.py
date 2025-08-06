class Solution(object):
    def maxProfit(self, prices):
        profit=0
        for x in range(1,len(prices)):
            if prices[x]>prices[x-1]:
                profit+=prices[x]-prices[x-1]
        return profit
        