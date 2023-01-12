
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Done using tuple sort o(n logn)
        if len(nums) == k:
            return nums
                
        count={}
        freq=[]

        for i in nums:
            count[i]=1+ count.get(i,0)

        for key,val in count.items():
            freq.append((val,key))
        freq.sort(reverse=True)
        res=[]
        for i in range(k):
            res.append(freq[i][1])
        
        # return res
        
        # done using bucket sort o(N)
        # count={}
        # freq=[[] for i in range(len(nums)+1)]

        # for i in nums:
        #     count[i]=1+ count.get(i,0)
        
        # for key, val in count.items():
        #     freq[val].append(key)
        # res=[]
        # for i in range(len(freq)-1,-1,-1):
        #     for j in freq[i]:
        #         res.append(j)
        #         if len(res) == k:
        #             return res

      
