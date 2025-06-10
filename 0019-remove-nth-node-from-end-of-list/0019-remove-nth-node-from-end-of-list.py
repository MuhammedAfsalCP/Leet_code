# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        curr=head
        l1=[]
        while curr:
            l1.append(curr)
            curr=curr.next
        index=len(l1)-n
        node=l1[index-1]
        if index == 0:
            return head.next
        node.next=node.next.next
        return head
        