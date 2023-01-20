class Solution:
    def printDiamond(self, N):
        # Code here
        spaces=N-1

        
        for i in range(1,N+1):
            print(" "*spaces + "* "* i)
            spaces-=1
        spaces=0        
        for j in range(N,0,-1):
            print(" "*spaces + "* "* j)
            spaces+=1
