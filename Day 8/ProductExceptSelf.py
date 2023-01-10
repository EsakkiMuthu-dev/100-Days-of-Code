import math

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        out=[]
        left=[]
        right=[]
        # 1 1 2  6
        # 24 12 4 1
        for i in range(0,len(nums)):
            if i ==0:
                left.append(1)
            else:
                val =left[i-1]*nums[i-1]
                left.append(val)


                
        for j in range(len(nums)-1,-1,-1):
            if j ==len(nums)-1:
                right.append(1)
            else:
                val=right[-1]*nums[j+1]
                right.append(val)
                # val =right[j-1]*nums[j-1]
                # left.append(val)

        right=right[::-1]

        for i in range(0,len(left)):
            val=left[i]*right[i]
            out.append(val)
 
        return out




