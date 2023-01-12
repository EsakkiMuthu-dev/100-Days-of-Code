class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        seen={}

        for i in range(0,len(numbers)):

            if numbers[i] in seen:
                return [seen[numbers[i]],i+1]
            else:
                val=target- numbers[i]
                seen[val]=i+1
