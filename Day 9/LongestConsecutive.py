class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if nums ==[]:
            return 0
        nums=sorted(list(set(nums)))
        counts=[]
        start=0
        end=1
        count=1
        # 1,2,3,4,100,200
        while end<len(nums):
            if nums[end]==nums[start]+1 :
                count+=1
            else:
                counts.append(count)
                count=1
            start+=1
            end+=1
        counts.append(count)
        return max(counts)

