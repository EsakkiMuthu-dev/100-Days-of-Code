class Solution:
    
    def rverseArray(self,arr, start,end ):
        
        while start < end:
	        temp = arr[start]
	        arr[start] = arr[end]
	        arr[end] = temp 
	        start+=1
	        end-=1
    def leftRotate(self, arr, k, n):
        # Your code goes here
        k=k%n
	    if (k == 0) :
	        return
	    self.rverseArray(arr, 0, k - 1)
	    self.rverseArray(arr, k, n - 1) 
	    self.rverseArray(arr, 0, n - 1) 
            

        # K= k%n
        # for i in  range(k):
        #     val=arr.pop(0)

        #     arr.append(val)
        # return arr

#{ 
 # Driver Code Starts
if __name__ == '__main__': 
    
    t=int(input())
    for _ in range(0,t):
        l=list(map(int,input().split()))
        n=l[0]
        k=l[1]
        a = list(map(int,input().split()))
        ob = Solution()
        ob.leftRotate(a,k,n)
        print(*a)
# } Driver Code Ends
