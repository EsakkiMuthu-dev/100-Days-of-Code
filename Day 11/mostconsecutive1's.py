class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        res=0
        count=0
        for n in nums:
            if n == 1:
                count+=1
            else:
                res=max(res,count)
                count=0
        res=max(res,count)
        return res
        # res=0
        # i=0
        # j=1
        # count= 0 if nums[i] == 0 else 1


        # while j < len(nums) and i < len(nums):
        #     if nums[i]!=1:
        #         i+=1

        #     elif nums[j]!=1:
        #         res=max(res,count)
    
        #         count=0
        #         i=j
        #         j+=1 
      
        #     else:
        #         count+=1
        #         j+=1
        # res=max(res,count)
        # return res


