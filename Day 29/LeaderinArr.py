from collections import deque
class Solution:
    #Back-end complete function Template for Python 3
    # def insertFirst(self,arr,val):
    #     arr[0] = val
        
    
    #Function to find the leaders in the array.
    def leaders(self, A, N):
        #Code here
        # rev manner
        maxArr=deque()
        maxArr.appendleft(A[-1])
        
        for i in range(N-2,-1,-1):
            if A[i] >= maxArr[0]:
                maxArr.appendleft(A[i])
        return maxArr    
        
        # #montonic stack
        # res=[]
        
        # for i in A:
        #     while res and res[-1] < i:
        #         res.pop()
        #     res.append(i)
     
        # return res
        
        
        # leaders=[]
        # leader =True
        # for i in range(0,N):
        #     leader =True
        #     for j in range(i+1,N):
    
        #         if A[i] < A[j]:
        #             leader = False
        #             break
        #     if leader:
        #         leaders.append(A[i])


        # return leaders

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


    
def main():
    
    T=int(input())
    
    while(T>0):
        
        
        N=int(input())
        
        A=[int(x) for x in input().strip().split()]
        obj = Solution()
        
        A=obj.leaders(A,N)
        
        for i in A:
            print(i,end=" ")
        print()
        
        T-=1

if __name__=="__main__":
    main()
# } Driver Code Ends
