class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res=[]
        if nums[0] > 0:
            return res
        for i in range(0,len(nums)-2):
            if i==0 or (nums[i]<1 and  nums[i]!=nums[i-1]):
                l=i+1
                r=len(nums)-1
                sum= (-1)*(nums[i])

                while l < r:
                    if nums[l]+nums[r] < sum:
                        l+=1
                    elif nums[l]+nums[r]>sum:
                        r-=1
                    else:
                        res.append([nums[i],nums[l],nums[r]])

                        while l<r and nums[l] == nums[l+1]: l+=1
                        while l<r and nums[r] == nums[r-1]: r-=1

                        l+=1
                        r-=1
        return res
