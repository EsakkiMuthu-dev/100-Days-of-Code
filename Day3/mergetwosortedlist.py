# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        # recursive approach

        if list1 == None : 
            return list2
        elif list2 == None:
            return list1

        if list1.val<list2.val:
            list1.next= self.mergeTwoLists(list1.next,list2)
            return list1
        else:
            list2.next= self.mergeTwoLists(list1,list2.next)
            return list2



        # iterative approach

        # head=dummy=ListNode()
        # while list1 and list2:
        #     if list1.val <list2.val:
        #         head.next=list1
        #         list1=list1.next
        #         head=head.next
            
        #     else:
        #         head.next=list2
        #         list2=list2.next
        #         head=head.next
        # if list1 or list2:
        #     head.next= list1 if list1 else list2
        # return dummy.next

        

