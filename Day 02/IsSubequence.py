class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s)<=0: # if s is empty return true
            return True
        
        #intialise start end as 0 and for storing the resulting intialize r

        start=0
        end =0
        r=""


        while end < len(t) and start < len(s):
            if t[end] ==s[start]:
                r+=t[end]
                start+=1
            end+=1
            
        return r ==s
