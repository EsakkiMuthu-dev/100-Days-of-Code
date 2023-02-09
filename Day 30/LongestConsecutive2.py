class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if nums ==[]:
            return 0
            # hashing
        nums=set(nums)
        maxlength =1
        for el in nums:
            if el-1 not in nums:
                length =0
                while el in nums:
                    el+=1
                    length+=1
                maxlength=max(maxlength,length)
        return maxlength
        # nums=sorted(list(set(nums)))
        # counts=0
        # start=0
        # end=1
        # count=1
        # # 1,2,3,4,100,200
        # while end<len(nums):
        #     if nums[end]==nums[start]+1 :
        #         count+=1
        #     else:
        #         counts= max(counts,count)
        #         count=1
        #     start+=1
        #     end+=1
        # counts= max(counts,count)
        # return counts

