# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def oddEvenList(self, head):
        curr=head
        odd=[]
        even=[]
        i=0
        while curr:
            if i%2==0:
                odd.append(curr.val)
            else:
                even.append(curr.val)
            curr=curr.next
            i+=1
        lenofodd=len(odd)
        i=0
        k=0
        curr=head
        while curr:
            if i<lenofodd:
                curr.val=odd[i]
            else:
                curr.val=even[k]
                k+=1
            i+=1
            curr=curr.next
        return head
            
        