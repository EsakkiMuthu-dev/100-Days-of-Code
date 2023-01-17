# from itertools import permutations
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        stack=[]
        res=[]

        def backtracking(open,close):
            if open ==close == n:
                res.append("".join(stack))
                return
            
            if open < n:
                stack.append("(")
                backtracking(open+1,close)
                stack.pop()
            
            if close < open:
                stack.append(")")
                backtracking(open,close+1)
                stack.pop()
        
        backtracking(0,0)

        return res


    


    # def isvalid(self,brackets)->bool:
    #     stack=[]
    #     match={')':'('}
    #     for i in brackets:
    #         if i in {'('}:
    #             stack.append(i)
    #         elif stack ==[] or stack.pop() !=match[i]:
    #             return False
    #     return True

    # def generateParenthesis(self, n: int) -> List[str]:
    #     perm =set(permutations("()"*n,n*2))
    #     res=[]
    #     for i in perm:
    #         i=''.join(i)
    #         if self.isvalid(i):
    #             res.append(i)
    #     return res
