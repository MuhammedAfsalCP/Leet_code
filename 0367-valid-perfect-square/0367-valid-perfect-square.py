class Solution(object):
    def isPerfectSquare(self, num):
        if num<2:
            return True
        left=2
        right=num//2
        while (left<=right):
            mid=(left+right)//2
            sum1=mid*mid
            if sum1==num:
                return True
            elif sum1>num:
                right=mid-1
            else:
                left=mid+1
        return False

        