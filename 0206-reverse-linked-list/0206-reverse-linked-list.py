# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseList(self, head):
        # Base case: empty list or single node
        if head is None or head.next is None:
            return head

        # Recursively reverse the rest of the list
        new_head = self.reverseList(head.next)

        # Reverse the current node's pointer
        head.next.next = head
        head.next = None

        return new_head
