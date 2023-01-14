class Solution:
    def isValid(self, s: str) -> bool:
        condition={"}":"{","]":'[',")":"("}
        stack=[]
        for i in s:
            if i in {'(','[','{'}:
                stack.append(i)
            else:
                if stack:
                    if  stack[-1] == condition[i]:
                        stack.pop()
                    else:
                        return False
                else:
                    return False
        return stack == []
