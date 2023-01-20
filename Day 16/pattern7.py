#User function Template for python3

class Solution:
    def printTriangle(self, N):
        # Code here
        pfix =N
        spaces=0
        for i in range(N):
            print("*"*pfix+" "*spaces+"*"*pfix)
            spaces+=2
            pfix-=1
        spaces-=2
        pfix+=1
        for j in range(N):
            print("*"*pfix+" "*spaces+"*"*pfix)
            spaces-=2
            pfix+=1


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
