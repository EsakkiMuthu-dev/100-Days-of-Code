from collections import Counter
class Solution:
    def longestPalindrome(self, s: str) -> int:
        freq=Counter(s)
        odd=0
        length=0
        for val in freq.values():
            if val%2:
                odd=1
            length+=val -val%2
        return length+odd
