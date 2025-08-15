from functools import reduce
class Solution(object):
    def calPoints(self, operations):
        arr=[]
        for x in range(len(operations)):
            if operations[x].lstrip('-').isdigit():
                # print(operations[x])
                arr.append(int(operations[x]))
            elif operations[x].isalpha():
                if operations[x]=="C":
                    arr.pop()
                if operations[x]=="D":
                    # print("HI")
                    arr.append(arr[-1]*2)
            elif operations[x]=="+":
                # print(sum(arr))
                arr.append(arr[-2]+arr[-1])
        return sum(arr)
            
            

        