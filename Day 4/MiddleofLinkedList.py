# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # floyd algorithm
        # if  not head or not head.next:
        #     return head
        
        # slow=fast =head

        # while fast and fast.next:
        #     slow=slow.next
        #     fast=fast.next.next
        # return slow

        # with dictonary
        nodes={}
        count=0
        while head:
            nodes[count]=head
            count+=1
            head=head.next
        mid = int(count/2)
        return nodes[mid]
