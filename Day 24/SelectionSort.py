#User function Template for python3

class Solution: 
    def select(self, arr, i):
        # code here 
        mini=i
        for j in range(i,len(arr)):
            if arr[j] < arr[mini]:
                mini=j
        return mini
        
    
    def selectionSort(self, arr,n):
        #code here
        
        for i in range(n-1):
            mini=self.select(arr,i)

            #  swap
            temp=arr[mini]
            arr[mini]= arr[i]
            arr[i]=temp

        return arr

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        n = int(input())
        arr = list(map(int, input().strip().split()))
        Solution().selectionSort(arr, n)
        for i in range(n):
            print(arr[i],end=" ")
        print()
# } Driver Code Ends
