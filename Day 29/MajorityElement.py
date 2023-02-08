class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Moore Voting Algo
        count = 0
        element =0

        for num in nums:
            if count == 0:
                element = num
            if element == num:
                count+=1
            else:
                count-=1
        return element

        
        # HashMap approach Tc: O(N) SC:O(N)
        # NumCount={}
        # threshold = len(nums)//2
        # for i in nums:
        #     NumCount[i] = NumCount.get(i,0)+1
        #     if NumCount[i] > threshold:
        #         return i
        # return -1
