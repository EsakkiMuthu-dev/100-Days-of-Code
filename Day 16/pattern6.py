#User function Template for python3
import string
class Solution:
    def printTriangle(self, N):
        # Code here
        letters= list(string.ascii_uppercase)
        
        for i in range(N,0,-1):
            for j in range(i):
                print(letters[j],end="")
            print()

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
