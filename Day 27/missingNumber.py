#User function Template for python3

def missingNumber( A, N):
     # Your code goes here
    #Brute force approach
    # nums=[i for i in range(1,N+1)]
    
    # for j in A:
    #     nums.remove(j)
    # return nums[0]
    
    
    #  N natural numbers formula is n * n+1/2
    total=N*(N+1)//2
    return total - sum(A)
    
    

#{ 
 # Driver Code Starts
#Initial Template for Python 3

def main():

    T = int(input())

    while(T > 0):
        n = int(input())
        a = [int(x) for x in input().strip().split()]
        print(missingNumber(a, n))

        T -= 1


if __name__ == "__main__":
    main()





    
# } Driver Code Ends
