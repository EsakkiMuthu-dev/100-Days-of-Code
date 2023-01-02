"""


Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


"""


class Solution:
    def storepos(self,a:str)->dict:
        pos={}
        for idx, i in enumerate(a):
            try:
                pos[i].append(idx)
            except:
                pos[i]=[idx]
        return pos

    
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        pos_s=self.storepos(s)
        pos_t=self.storepos(t)

        for i in range(0,len(s)):

            if pos_s[s[i]] !=pos_t[t[i]]:
                return False
        return True



        
