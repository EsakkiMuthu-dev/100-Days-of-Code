class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        monotonic_stack=[]
        res=nums.copy()
        for i in range(2*len(nums)-1 , -1,-1):
            while monotonic_stack!=[] and nums[i%len(nums)]>=monotonic_stack[-1]:
                monotonic_stack.pop()
            if i < len(nums):
                if monotonic_stack!=[]:
                    res[i]=monotonic_stack[-1]
                else:
                    res[i] = -1
            monotonic_stack.append(nums[i%(len(nums))])
        return res            
                
