class Solution(object):
    def findThePrefixCommonArray(self, A, B):
        """
        :type A: List[int]
        :type B: List[int]
        :rtype: List[int]
        """
        hashset1=set()
        hashset2=set()
        count=0
        l1=[]
        for x in range(len(A)):
            hashset1.add(A[x])
            hashset2.add(B[x])
            if A[x] in hashset2:
                count+=1
            if B[x] in hashset1 and A[x]!=B[x]:
                count+=1
            l1.append(count)
            
        return l1

            
