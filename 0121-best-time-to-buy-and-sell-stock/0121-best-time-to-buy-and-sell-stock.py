class Solution(object):
    def maxProfit(self,prices):
        min_value = prices[0]
        max_profit = 0

        for price in prices:
            if price < min_value:
                min_value = price
            profit = price - min_value
            if profit > max_profit:
                max_profit = profit

        return max_profit

        