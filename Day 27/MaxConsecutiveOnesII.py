from typing import (
    List,
)

class Solution:
    """
    @param nums: a list of integer
    @return: return a integer, denote  the maximum number of consecutive 1s
    """
    def find_max_consecutive_ones(self, nums: List[int]) -> int:
        # write your code here

        i=j=maxCount=flip=0

        while i < len(nums):

            if nums[i] == 0 :
                flip+=1
            while flip > 1:
                if nums[j] ==0:
                    flip-=1
                j+=1
            maxCount = max(maxCount , i-j+1)
            i+=1
        return maxCount

