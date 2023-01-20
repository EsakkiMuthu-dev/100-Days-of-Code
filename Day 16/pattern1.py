#User function Template for python3

class Solution:
    def printTriangle(self, N):
        # Code here
        count=-1
        for i in range(1,N+1):
            spaces=N-i
            count+=2
            print(" " * (spaces) + "*" * (count)+ " ")




#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ob.printTriangle(N)
# } Driver Code Ends
