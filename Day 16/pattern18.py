#User function Template for python3

class Solution:
    def printTriangle(self, N):
        # Code here

        for i in range(N):
            if i == 0 or i ==N-1:
                print("*"*N)
            else:
                print("*"+" "*(N-2)+"*")
            

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input().strip())
        ob = Solution()
        ob.printTriangle(N)
# } Driver Code Ends
