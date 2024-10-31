class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        count =0
        x=1
        while x*x<=num:
            if x*x==num:
                return True
            x+=1
        return False  