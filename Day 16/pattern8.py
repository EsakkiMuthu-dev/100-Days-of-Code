#User function Template for python3

class Solution:
    def printTriangle(self, N):
        # Code here
        pfix=1
        spaces=(2*N)-2
        
        for i in range(N):
            print("*"*pfix+" "*spaces+"*"*pfix)
            pfix+=1
            spaces-=2
        pfix-=2
        spaces+=4
        for j in range(1,N):
            print("*"*pfix+" "*spaces+"*"*pfix)
            pfix-=1
            spaces+=2


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
