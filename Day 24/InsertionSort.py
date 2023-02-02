#Sort the array using insertion sort

class Solution:
    def insert(self, alist, index, n):
        #code here
        j=index
        while(j > 0 and alist[j-1] > alist[j]):
            alist[j-1],alist[j] = alist[j], alist[j-1]
            j-=1
        
    #Function to sort the list using insertion sort algorithm.    
    def insertionSort(self, alist, n):
        #code here
        
        for i in range(n):
            idx=i
            self.insert(alist,idx,n)
        return arr

#{ 
 # Driver Code Starts
if __name__=="__main__":
    t=int(input())
    for i in range(t):
        n=int(input())
        arr=list(map(int,input().split()))
    
        Solution().insertionSort(arr,n)
    
        for i in range(n):
            print(arr[i],end=" ")
    
        print()
# } Driver Code Ends
