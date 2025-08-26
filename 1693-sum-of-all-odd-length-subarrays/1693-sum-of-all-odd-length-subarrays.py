class Solution(object):
    def sumOddLengthSubarrays(self, arr):
        l=len(arr)
        count=1
        sum1=[]
        while(count<=l):
            if count==1 or count==l:
                sum1.append(sum(arr))
            else:
                
            
                for x in range(0,l - count + 1):
                    arr2=arr[x:count+x]
                    sum1.append(sum(arr2))
                    print(arr2)
                
            count+=2
        return sum(sum1)
        