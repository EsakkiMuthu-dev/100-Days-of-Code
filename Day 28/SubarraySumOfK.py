class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        currSum=0
        prefixSums={0:1}
        res=0
        for i in nums:
            currSum+=i
            diff = currSum - k

            res+= prefixSums.get(diff,0)
            prefixSums[currSum] = 1+ prefixSums.get(currSum,0)
        return res


