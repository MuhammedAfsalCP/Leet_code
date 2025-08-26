class Solution(object):
    def sumOddLengthSubarrays(self, arr):
        l=len(arr)
        count=1
        sum1=0
        while(count<=l):
            for x in range(0,l - count + 1):
                arr2=arr[x:count+x]
                sum1+=sum(arr2)  
            count+=2
        return sum1
        