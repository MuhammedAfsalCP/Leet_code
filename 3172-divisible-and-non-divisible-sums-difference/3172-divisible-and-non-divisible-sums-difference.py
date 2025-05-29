class Solution(object):
    def differenceOfSums(self, n, m):
        totalSum = n * (n + 1) / 2
        k = n / m
        num2 = m * k * (k + 1) / 2
        num1 = totalSum - num2
        return num1 - num2
        