#User function Template for python3


# m is maximum of number zeroes allowed 
# to flip, n is size of array 
def findZeroes(arr, n, m) :
    # code here
    i=j=maxCount=flip=0
    
    while i < n:
        if arr[i] == 0:
            flip+=1
        #  try to fing previous zero and unflip it
        while flip > m:
            if arr[j] == 0:
                flip-=1
            j+=1
        
        maxCount= max(maxCount , i -j +1)
        i+=1
    return maxCount
            

#{ 
 # Driver Code Starts
#Initial Template for Python 3




# Driver code 
if __name__ == "__main__": 		
    tc=int(input())
    while tc > 0:
        n=int(input())
        arr=list(map(int , input().strip().split()))
        m=int(input())
        ans= findZeroes(arr, n, m)
        print(ans)
        tc=tc-1
# } Driver Code Ends
