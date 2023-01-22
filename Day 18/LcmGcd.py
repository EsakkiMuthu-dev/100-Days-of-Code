#User function Template for python3

class Solution:
    def lcmAndGcd(self, A , B):
        # code here 
        lcm=A*B
        gcd=1
        while (A!=0) and (B!=0):
            if A>B:
                A=A%B
            else:
                B=B%A
            
        if A == 0 :
            gcd=B
        else:
            gcd=A

        lcm= lcm//gcd
        return lcm , gcd


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        A,B=map(int,input().split())
        
        ob = Solution()
        ptr = ob.lcmAndGcd(A,B)
        
        print(ptr[0],ptr[1])
# } Driver Code Ends
