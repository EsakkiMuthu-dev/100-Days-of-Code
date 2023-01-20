#User function Template for python3
import string
class Solution:
    def printTriangle(self, N):
        letters=string.ascii_uppercase
        for i in range(1,N+1):
            start=N-1
            for j in range(i):
                print(letters[start],end=" ")
                start-=1
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
