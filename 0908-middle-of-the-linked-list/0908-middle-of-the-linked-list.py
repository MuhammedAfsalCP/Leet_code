# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def middleNode(self, head):
        curr=head
        l1=[]
        while curr:
            l1.append(curr)
            curr=curr.next
        index=len(l1)/2
        node=l1[index]
        return node

        