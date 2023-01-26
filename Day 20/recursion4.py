#User function Template for python3
import math
class Solution:
    def sumOfSeries(self,N):
        #code here
        ans=(N*(N+1))**2//4
        return ans
        # return ((N*(N+1))**2)//4

        # if N==1:
        #     return 1
        # return N*N*N+self.sumOfSeries(N-1)


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N=int(input())
        ob=Solution()
        print(ob.sumOfSeries(N)) 
# } Driver Code Ends
