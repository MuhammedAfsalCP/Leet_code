class Solution(object):
    def reverse(self, x):
        digit=""
        sign=""
        for i in str(x):
            if i.isdigit():
                digit=i+digit
            else:
                sign="-"
        
        print(digit)
        digit=int(sign+digit)
        if digit < -2**31 or digit > 2**31 - 1:
            return 0
        
        return digit
        # x=int(digit)
        