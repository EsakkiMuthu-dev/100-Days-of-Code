class Solution:

    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0

        buy =prices[0]
        profit=0
        for price in prices[1:]:
            if price- buy > profit:
                profit=price-buy
            if price < buy:
                buy=price
        return profit




        # ptr1=0
        # ptr2=1
        # max_profit=0

        # while ptr2 < len(prices):
        #     if prices[ptr1]>prices[ptr2]:
        #         ptr1+=1
        #     else:
        #         profit=prices[ptr2]-prices[ptr1]
        #         max_profit= max(profit,max_profit)
        #         ptr2+=1
        # return max_profit
            
