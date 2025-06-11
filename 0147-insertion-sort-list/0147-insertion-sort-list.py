# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def insertionSortList(self, head):
        curr=head
        l1=[]
        while curr:
            l1.append(curr.val)
            curr=curr.next
        l1.sort()
        curr=head
        i=0
        while curr:
            curr.val=l1[i]
            i+=1
            curr=curr.next
        return head
        