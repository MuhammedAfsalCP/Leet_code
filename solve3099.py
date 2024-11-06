from functools import reduce
class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        a=str(x)
        b=list(a)
        c=map(lambda x:int(x),b)
        c=reduce(lambda acc,val:acc+val,c,0)
        if x%c==0:
            return c
        else :
            return -1    
