class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxArea=0
        l=0
        r=len(height)-1

        while l < r:
            area= min(height[l],height[r]) * (r-l)
            maxArea= max(maxArea,area)

            if height[l] < height[r]:
                l+=1
            elif height[l] > height[r]:
                r-=1
            else:
                r-=1
        return maxArea
        # area=0
        # for i in range(0,len(height)):
        #     l=i
        #     r=len(height)-1
        #     # print(i)
        #     # print("------------")
        #     # [1,8,100,2,100,4,8,3,7]
        #     while l < r:
        #         # print(f"left: {height[l]} right: {height[r]} ")
        #         length=r-l
        #         b=min(height[l],height[r])
        #         area=max(area,length*b)
        #         # print(f"length : {length} breadth : {b} area: {area} ")

        #         r-=1
        # return area
