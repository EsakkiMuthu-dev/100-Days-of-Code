/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

*/

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # use sliding window algorithm
        # intailse start end position as 0
        # append letters in set
        start,end,long =0,0,0
        letters=[]
        

        # create a  while loop when it recahes aend of an string it will stop

        while end<len(s):
            # we are adding the first letter to our window and increment end by 1
            letters.append(s[end])
            # checking whether this letter is already prest in letters if it is then increament start therfore we can remove first value and update length to long varibale


            while start < end and letters.count(s[end])>1:
                letters.remove(s[start])
                start+=1
            long=max(len(letters),long)
            end+=1




        return long







        
