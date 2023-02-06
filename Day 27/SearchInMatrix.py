#User function Template for python3
class Solution:
	def matSearch(self,mat, N, M, X):
		# Complete this function
		 for i in range(N):
		     for j in range(M):
		         if mat[i][j] == X:
		             return 1
		 return 0

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n, m = map(int, input().split())
        
        arr = [int(x) for x in input().split()]
        x = int(input())
        mat = [[0 for j in range(m)] for i in range(n)]
        
        for i in range(n):
            for j in range(m):
                mat[i][j] = arr[i * m + j]
        ob = Solution()
        print(ob.matSearch(mat, n, m, x))
# } Driver Code Ends


#  leetcode

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        for row in range(len(matrix)):
            if matrix[row][-1] >= target:
                for i in range( len(matrix[row])):
                    if matrix[row][i] == target:
                        return True
                return False
