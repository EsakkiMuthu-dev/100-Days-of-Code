class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        #  using monotonic increaing stack
        n=len(heights)
        left_small=[0 for i in range(len(heights))]
        right_small=[n-1 for i in range(len(heights))]
        stack=[]
        for  i in range(0,len(heights)):
            while stack !=[] and stack[-1]["val"]>=heights[i]:
                stack.pop()
            
            if stack != []:
                left_small[i]=stack[-1]["idx"]+1

            stack.append({"idx":i,"val":heights[i]})
        
        stack=[]
        max_area=0
        for j in range(len(heights)-1,-1,-1):
            while stack!=[] and stack[-1]["val"]>=heights[j]:
                stack.pop()

            if stack != []:
                right_small[j]=stack[-1]["idx"]-1
            width=right_small[j]-left_small[j] +1
            area=heights[j]*width
            # print(area)
            max_area=max(area,max_area)

            stack.append({"idx":j,"val":heights[j]})

        # max_area=0
        # for i in range(0,len(heights)):
        #     width=right_small[i]-left_small[i] +1
        #     area=heights[i]*width
        #     # print(area)
        #     max_area=max(area,max_area)
        return max_area        




        # Brute Force APProach =TLE
        # max_area=0
        # for i in range(0,len(heights)):
        #     height=heights[i]
        #     val=1
        #     for j in range(i+1,len(heights)):
        #         if heights[j]>=height:
        #             val+=1
        #         else:
        #             area_= height*val
        #             max_area=max(max_area,area_)
        #             height=heights[j]
        #             val+=1
        #     max_area=max(max_area,height*val)
        # return max_area
