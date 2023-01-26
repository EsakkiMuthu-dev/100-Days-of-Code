import string
class Solution:
    def isPalindrome(self, s: str) -> bool:
        #  traditional with list comprehension
        s=[i  for i in s.lower() if i.isalnum()]
        # return s==s[::-1]

        # recursion

        n=len(s)
        def check(s,l=0,r=n-1):
            if l>r:
                return True
            if s[l] !=s[r]:
                return False
            return check(s,l+1,r-1)
        return check(s)



        # str translate
        # s=s.lower()
        # translator=str.maketrans("","",string.punctuation)
        # s=s.translate(translator)
        # s=s.replace(" ","")
        # return s== s[::-1]

        # tarditonl approach
        # org=""
        # for i in s.lower():
        #     if i.isalnum():
        #         org+=i
        # return org == org[::-1]





 

