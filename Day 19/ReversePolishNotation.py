class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack=[]
        operations={
            "+":lambda x,y:x+y,
            "-":lambda x,y:x-y,
            "*":lambda x,y:x*y,
            "/":lambda x,y:int(x/y)
        }
        for c in tokens:
            if c not in operations:
                stack.append(int(c))
            else:
                right=stack.pop()
                left=stack.pop()
                stack.append(operations[c](left,right))
        return stack[-1]
        # for c in tokens:
        #     if c=="+":
        #         stack.append(stack.pop()+stack.pop())
        #     elif c=="-":
        #         a,b=stack.pop(),stack.pop()
        #         stack.append(b-a)
        #     elif c=="*":
        #         stack.append(stack.pop()* stack.pop())
        #     elif c=="/":
        #         a,b = stack.pop(),stack.pop()
        #         stack.append(int(b/a))
        #     else:
        #         stack.append(int(c))
        # return stack[-1]
