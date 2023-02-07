#User function Template for python3
class Solution:
    def search(self, A, N):
        nums=[]
        
        for i in A:
            if i in nums:
                nums.remove(i)
            else:
                nums.append(i)

        return nums[0]
                
            
                
            


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
	t = int (input ())
	for tc in range (t):
		n = int (input ())
		arr = list(map(int, input().split()))
		ob = Solution()
		print(ob.search(arr, n)) 
# } Driver Code Ends
