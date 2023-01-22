#User function Template for python3

# code here

class Solution:
        
    def sumOfDivisors(self, N):
        sum=0
        
        for i in range(1,N+1):
            sum  = sum + int((N/i)) * i;
            # for j in range(1,int(math.sqrt(i))+1):
            #     if i%j ==0:
            #         if j == i//j:
            #             sum+=j
            #         else:
            #             sum+=j + i//j

        return sum

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ans = ob.sumOfDivisors(N)
        print(ans)
# } Driver Code Ends
