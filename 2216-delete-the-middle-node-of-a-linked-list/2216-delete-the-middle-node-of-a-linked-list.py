# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteMiddle(self, head):
        if not head or not head.next:
            return None
        curr=head
        l1=[]
        while curr:
            l1.append(curr)
            curr=curr.next
        index=len(l1)/2
        i=0
        curr=head
        while curr:
            if i==index-1:
                curr.next=curr.next.next
            curr=curr.next
            i+=1
        return head

        