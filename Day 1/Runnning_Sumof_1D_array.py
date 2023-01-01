/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

*/


class Solution:

    def runningSum(self, nums: List[int]) -> List[int]:
        # res=[]
        # out=[]
        # for i in range(1,len(nums)+1):
        #     out=nums[:i]
        #     res.append(sum(out))
        # return res

        count=0
        res=[]
        for i in nums:
            count+=i
            res.append(count)
        return res
