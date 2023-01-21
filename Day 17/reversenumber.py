class Solution:
    def reverse(self, x: int) -> int:
        rev=int((str(abs(x))[::-1])) if x>0 else -1*(int((str(abs(x))[::-1])) )
        if rev in range(-2**31, 2**31 - 1):
            return rev
       
        return 0

