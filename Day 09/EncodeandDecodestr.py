class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs):
        # write your code here
        out=""
        for i in range(0,len(strs)):
            if i == len(strs)-1:
                out+=strs[i]
            else:
                out+=strs[i]+":;"

        return out

    """
    @param: str: A string
    @return: dcodes a single string to a list of strings
    """
    def decode(self, str):
        # write your code here
        org=str.split(":;")

        return org
