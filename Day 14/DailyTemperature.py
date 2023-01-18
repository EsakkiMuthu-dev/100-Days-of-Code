class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack =[] #monotonic increasing stack with index using tuple
        res=[0]*(len(temperatures))
        # res=[0 for i in range(len( temperatures))]
        for i in range(len(temperatures)-1, -1 ,-1):
            while stack and temperatures[i]>=stack[-1][1]:
                stack.pop()
            if stack:
                res[i] =stack[-1][0] -i         
            stack.append((i, temperatures[i]))
        return res
            

        # ans={}
        # start=0
        # end =1
        # while True:
        #     if start == len(temperatures)-1:
        #         print(temperatures[start])
        #         ans[start]=0
        #         break
        #     if end == len(temperatures):
        #         start=start+1
        #         end=start
        #         ans[start]=0
                
        #     if temperatures[end]> temperatures[start]:
        #         ans[start]=end-start
        #         start=start+1
        #         end=start
        #         print(f"start : {temperatures[start]} ans : {ans}")

  
        #     end+=1
        #     # print(f"from out side --- start : {start} ans : {ans}")
        # print(start)


        # return ans.values()
