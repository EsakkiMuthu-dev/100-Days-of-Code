class MinStack:

    def __init__(self):
        self.stack=[]
        self.min_stack=[]

    def push(self, val: int) -> None:
        self.stack.append(val)
        self.min_stack.append((min(self.min_stack[-1],val) if self.min_stack else val))
        
    def pop(self) -> None:
        self.min_stack.remove(self.stack[-1])
        self.stack.pop()
    
    def top(self) -> int:
        return self.stack[-1]
       
    def getMin(self) -> int:
        # sor =sorted(self.stack)
        return self.min_stack[-1]
    

# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
