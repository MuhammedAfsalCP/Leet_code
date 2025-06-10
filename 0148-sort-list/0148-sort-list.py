# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def sortList(self, head):
        curr=head
        l1=[]
        while curr:
            l1.append(curr.val)
            curr=curr.next
        l1.sort()
        i=0
        curr=head
        while curr:
            curr.val=l1[i]
            curr=curr.next
            i+=1
        return head

        