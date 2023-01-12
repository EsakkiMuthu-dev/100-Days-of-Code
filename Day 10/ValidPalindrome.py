import string
class Solution:
    def isPalindrome(self, s: str) -> bool:
        #  traditional with list comprehension
        # s=[i  for i in s.lower() if i.isalnum()]
        # return s==s[::-1]



        # str translate
        s=s.lower()
        translator=str.maketrans("","",string.punctuation)
        s=s.translate(translator)
        s=s.replace(" ","")
        return s== s[::-1]

        # tarditonl approach
        # org=""
        # for i in s.lower():
        #     if i.isalnum():
        #         org+=i
        # return org == org[::-1]





 

