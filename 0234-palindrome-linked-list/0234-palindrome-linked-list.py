# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def isPalindrome(self, head):
        curr=head
        l1=[]
        while curr:
            l1.append(str(curr.val))
            curr=curr.next
        
        str1=''.join(l1)
        str2=str1[::-1]
        if str1==str2:
            return True
        else:
            return False
        