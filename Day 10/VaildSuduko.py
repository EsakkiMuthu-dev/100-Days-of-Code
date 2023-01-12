class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        seen=set()

        for i in range(0,9):
            for j in range(0,9):
                if board[i][j]!=".":
                    row=f"{board[i][j]} found in row {i}"
                    col=f"{board[i][j]} found in column {j}"
                    box=f"{board[i][j]} found in box {i//3} {j//3}"
                    if row in seen or col in seen or box in seen:
                        return False
                    else:
                        seen.add(row)
                        seen.add(col)
                        seen.add(box)


        return True
