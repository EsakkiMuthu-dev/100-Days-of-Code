#User function Template for python3
import string
class Solution:
    def printTriangle(self, N):
        letters=string.ascii_uppercase
        spaces=N-1
        for i in range(0,N):
            # spaces
            print(" "*spaces,end="")
            spaces-=1
            # prefix
            for j in range(i):
                print(letters[j],end="")
            
            # middle one
            print(letters[i],end="")
            # postfix
            for k in range(i-1,-1,-1):
                print(letters[k],end="")
            
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
