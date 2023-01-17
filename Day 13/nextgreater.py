class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ans=[-1]* len(nums1)
        for i in range(0,len(nums1)):
            idx= nums2.index(nums1[i])
            for j in range(idx+1,len(nums2)):
                if nums2[j]> nums1[i]:
                    ans[i]= nums2[j]
                    break
                # print(f"nums1: {nums1[i]} nums2 : {nums2[j]}")
            # print(f"ans: {ans}")
        return ans
            
