#User function Template for python3

class Solution:
    def factorialNumbers(self, N,i=2,f=[1]):
        val = f[-1]*i
        if val >N:
            return f
        f.append(val)
        self.factorialNumbers(N,i+1,f)
        return f

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ans = ob.factorialNumbers(N)
        for i in ans:
            print(i, end=" ")
        print()
        
# } Driver Code Ends
