#User function Template for python3

class Solution:
    def merge(self,arr,l_arr,r_arr): 
        # code here
        i=j=k=0
        
        while i < len(l_arr) and j < len(r_arr):
            if l_arr[i] < r_arr[j]:
                arr[k] =l_arr[i]
                i+=1
            else:
                arr[k] = r_arr[j]
                j+=1
            k+=1
        while i < len(l_arr):
            arr[k] = l_arr[i]
            i+=1
            k+=1
            
        while j < len(r_arr):
            arr[k] = r_arr[j]
            j+=1
            k+=1
     
            
    def mergeSort(self,arr,l =0 ,r =0):
        #code here
        if len(arr) > 1:
            mid=len(arr) //2
            left_arr=arr[ : mid]
            right_arr = arr[mid:]
            
            self.mergeSort(left_arr)
            self.mergeSort(right_arr)
            
            #  merge
            self.merge(arr,left_arr,right_arr)




#{ 
 # Driver Code Starts
#Initial Template for Python 3


import sys
input = sys.stdin.readline
if __name__ == "__main__":
    t=int(input())
    for i in range(t):
        n=int(input())
        arr=list(map(int,input().split()))
        Solution().mergeSort(arr, 0, n-1)
        for i in range(n):
            print(arr[i],end=" ")
        print()
# } Driver Code Ends
