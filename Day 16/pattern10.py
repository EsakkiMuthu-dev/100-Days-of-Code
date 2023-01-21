#User function Template for python3

class Solution:
    def printTriangle(self, N):
        # Code here
        # top half
        for i in range(N,1,-1):
            # t-left
            for j in range(N,0,-1):
                if j <i:
                    print(str(i),end=" ")
                else:
                    print(str(j),end=" ")
                    
            # t-right
            for k in range(2,N+1):
                if k<i:
                    print(str(i),end=" ")
                else:
                    print(str(k),end=" ")
                
            print()
            
        
        # # bottom half
        for i in range(1,N+1):
          
            # b-left
            for j in range(N,0,-1):
                if j <i:
                    print(str(i),end=" ")
                else:
                    print(str(j),end=" ")
                    
            # b-right
            for k in range(2,N+1):
                if k<i:
                    print(str(i),end=" ")
                else:
                    print(str(k),end=" ")
                
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
