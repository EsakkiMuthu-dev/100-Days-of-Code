#User function Template for python3

class Solution:
	def pushZerosToEnd(self,arr, n):
    	# code here
    	count = 0
    	
    	for i in range(n):
    	    if arr[i] != 0:
    	        arr[count],arr[i] = arr[i],arr[count]
    	        count+=1

    	    
    	        
    # 	count = 0
    	
    # 	for i in range(n):
    # 	    if arr[i] != 0:
    # 	        arr[count] = arr[i]
    # 	        count+=1
    # 	for i in range(count,n):
    # 	    arr[i] =0
    	    

    # 	zeros=0
    # 	non_zeros=[]
    # 	for i in range(n):
    # 	    if arr[i] == 0:
    # 	        zeros+=1
    # 	    else:
    # 	       non_zeros.append(arr[i])
    # 	arr= non_zeros+[0]*zeros
    # 	print(arr)


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        n = int(input())
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ob.pushZerosToEnd(arr, n)
        for x in arr:
            print(x, end=" ")
        print()
        tc -= 1
# } Driver Code Ends
