class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        count=0
        costs=sorted(costs)
        for i in costs:
            if coins- i <0:
                break
            coins=coins-i
            count+=1
        return count


        # end=0
        # count=0
        # icecream=0
        # costs=sorted(costs)
        # while end < len(costs):
        #     if count+costs[end] >coins:
        #         end+=1
        #     else:
        #         count+=costs[end]
        #         icecream+=1
        #         end+=1
   
        # return icecream
