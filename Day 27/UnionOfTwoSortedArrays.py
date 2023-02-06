#User function Template for python3

class Solution:
    
    #Function to return a list containing the union of the two arrays.
    def mergeArrays(self,a,b,n,m):
        
        '''
        :param a: given sorted array a
        :param n: size of sorted array a
        :param b: given sorted array b
        :param m: size of sorted array b
        :return:  The union of both arrays as a list
        '''
        
        # code here 
        res=[  ]
        i=j=0

        while i < n and j < m :
            
            while i+1 < n and a[i] == a[i+1]:
                i+=1
                
            while j+1 < m and b[j] == b[j+1]:
                j+=1
            
            if a[i] < b[j]:
                res.append(a[i])
                i+=1
                
            elif b[j] < a[i]:
                res.append(b[j])
                j+=1
                
            else:
                if not res or res[-1] != a[i]:
                    res.append(a[i])
                i+=1
                j+=1

        while i < n:
            if res[-1] != a[i]:
                res.append(a[i])
            i+=1
        
        while j < m:
            if res[-1] != b[j]:
                res.append(b[j])
            j+=1
        

        return res
        # a= set(a)
        # b = set(b)
        
        # return sorted(list(a.union(b)))
        
        


#{ 
 # Driver Code Starts
#Initial Template for Python 3

# Contributed by : Nagendra Jha
# Modified by : Sagar Gupta


if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases) :
        n,m = map(int,input().strip().split())
        a = list(map(int,input().strip().split()))
        b = list(map(int,input().strip().split()))
        ob=Solution()
        li = ob.mergeArrays(a,b,n,m)
        for val in li:
            print(val, end = ' ')
        print()
# } Driver Code Ends
