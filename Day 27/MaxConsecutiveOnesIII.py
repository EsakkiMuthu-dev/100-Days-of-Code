class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:


        i=0
        j = 0 # for flipping zero
        maxCount=0
        flip=0


        while i < len(nums):
            if nums[i] == 0:
                flip+=1
            
            while flip > k:
                if nums[j] == 0:
                    flip-=1
                j+=1
            
            maxCount= max(maxCount,i-j+1)
            i+=1
        return maxCount


   

