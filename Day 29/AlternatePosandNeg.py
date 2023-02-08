#User function Template for python3

class Solution:
    def rearrange(self,arr, n):
        # code here
        pos=[]
        neg=[]
        
        for i in arr:
            if i < 0:
                neg.append(i)
            else:
                pos.append(i)
        i=0
        j=0
        k=0



        while i < len(pos) and j < len(neg):
            arr[k] = pos[i]
            k+=1
            i+=1
            
            arr[k] =neg[j]
            j+=1
            k+=1

    
        while i < len(pos):
            arr[k]=pos[i]
            i+=1
            k+=1
            
        while j < len(neg):
            arr[k] =neg[j]
            j+=1
            k+=1

#  if both len are equal
class Solution:
    def rearrangeArray(self, arr: List[int]) -> List[int]:
        i=0
        j=1
        res=[0]*len(arr)
        for a in arr:
          
            if a < 0:
                res[j] = a
                j+=2
        
            else:
                res[i] = a
                i+=2
            
        return res
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	tc = int(input())
	while tc > 0:
		n = int(input())
		arr = list(map(int, input().strip().split()))
		ob = Solution()
		ob.rearrange(arr, n)
		for x in arr:
			print(x, end=" ")
		print()
		tc -= 1

# } Driver Code Ends
