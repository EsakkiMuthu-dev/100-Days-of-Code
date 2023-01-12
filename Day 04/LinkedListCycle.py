# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
    # using set 
        nodes=set()
        while head:
            if head in nodes:
                return head
            else:
                nodes.add(head)
            head=head.next
        return None
    
    # #  using flyod algorithm
        # slow=fast=head
        # while fast and fast.next:
        #     slow=slow.next
        #     fast=fast.next.next
        #     if slow.val ==fast.val:
        #         while slow!=head:
        #            slow=slow.next
        #            head=head.next
        #         return head

        # return None


    #  another approach
        # node=head
        # val=None

        # while node.next:
        #     if node.next.val == val:
        #         return node.next
        #     val=node.val
        #     node=node.next
        # return None





