#User function Template for python3

class Solution:
    ##Complete this function
    def searchInSorted(self,arr, N, K):
        #Your code here
        # binary search
        # def binarysearch(arr,target):
        #     if len(arr) < 2:
        #         return -1
                
        #     mid = len(arr) // 2
        #     print(arr, arr[mid], mid, target)
        #     if arr[mid] == target:
        #          return 1
        #     elif arr[mid] < target:
        #         return binarysearch(arr[0:mid+1],target)
        #     else:
        #         return binarysearch(arr[mid+1:],target)
        # return binarysearch(arr,K)
        for i in arr:
            if i == K:
                return 1
        return -1


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
if __name__ == '__main__': 
	t = int(input())
	for _ in range(t):
		NK = input().strip().split()
		N = int(NK[0])
		K = int(NK[1])
		A = [ int(x) for x in input().strip().split() ]
		ob=Solution()
		print(ob.searchInSorted(A,N,K))

# } Driver Code Ends
