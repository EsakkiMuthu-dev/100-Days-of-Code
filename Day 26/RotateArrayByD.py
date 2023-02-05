#User function Template for python3

class Solution:
    def reverse(self,arr,start,end):
        while start < end:
            try:
                arr[start],arr[end] = arr[end], arr[start]
            except:
                print(start, end)
            start,end=start+1,end-1
    def leftRotate(self, arr, n, d):
        # code here

        d = d%n
        self.reverse(arr,0,d-1)

        self.reverse(arr,d,n-1)

        self.reverse(arr,0,n-1)



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        n = int(input())
        arr = list(map(int, input().strip().split()))
        d = int(input())
        ob = Solution()
        ob.leftRotate(arr, n, d)
        for xx in arr:
            print(xx, end=" ")
        print()
        tc -= 1

# } Driver Code Ends
