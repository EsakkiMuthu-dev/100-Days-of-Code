import java.util.Random;
import java.util.Scanner;

public class MinesweeperGame {
    private Board board;

    public MinesweeperGame(int size, int numMines) {
        this.board = new Board(size, numMines);
    }

    public void startGame() {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            board.printBoard();
            System.out.print("Enter row and column (e.g., 1 2): ");
            int row = scanner.nextInt() - 1;
            int col = scanner.nextInt() - 1;

            if (!isValidInput(row, col)) {
                System.out.println("Invalid input. Try again.");
                continue;
            }

            if (board.isMine(row, col)) {
                board.revealMines();
                board.printBoard();
                System.out.println("Game over! You hit a mine!");
                break;
            } else {
                board.revealCell(row, col);

                if (board.isGameWon()) {
                    board.printBoard();
                    System.out.println("Congratulations! You won!");
                    break;
                }
            }
        }

        scanner.close();
    }

    private boolean isValidInput(int row, int col) {
        return row >= 0 && row < board.getSize() && col >= 0 && col < board.getSize() && !board.isCellRevealed(row, col);
    }

    public static void main(String[] args) {
        MinesweeperGame game = new MinesweeperGame(2, 1);
        game.startGame();
    }
}

class Board {
    private int size;
    private int numMines;
    private Cell[][] cells;

    public Board(int size, int numMines) {
        this.size = size;
        this.numMines = numMines;
        this.cells = new Cell[size][size];
        initializeBoard();
    }

    private void initializeBoard() {
        // Initialize cells with mines and adjacent mine counts
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                cells[i][j] = new Cell();
            }
        }

        // Randomly set mines
        Random random = new Random();
        int minesPlaced = 0;
        while (minesPlaced < numMines) {
            int row = random.nextInt(size);
            int col = random.nextInt(size);
            if (!cells[row][col].hasMine()) {
                cells[row][col].setMine(true);
                minesPlaced++;
            }
        }

        // Update adjacent mine counts
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (!cells[i][j].hasMine()) {
                    cells[i][j].setAdjacentMines(countAdjacentMines(i, j));
                }
            }
        }
    }

    private int countAdjacentMines(int row, int col) {
        int count = 0;
        for (int i = row - 1; i <= row + 1; i++) {
            for (int j = col - 1; j <= col + 1; j++) {
                if (isValidCell(i, j) && cells[i][j].hasMine()) {
                    count++;
                }
            }
        }
        return count;
    }

    private boolean isValidCell(int row, int col) {
        return row >= 0 && row < size && col >= 0 && col < size;
    }

    public void printBoard() {
        // Print the current state of the board
        System.out.println("Current Board:");
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (cells[i][j].isRevealed()) {
                    System.out.print(cells[i][j].getDisplayValue() + " ");
                } else {
                    System.out.print(". ");
                }
            }
            System.out.println();
        }
        System.out.println();
    }

    public boolean isMine(int row, int col) {
        return cells[row][col].hasMine();
    }

    public void revealCell(int row, int col) {
        cells[row][col].setRevealed(true);
    }

    public void revealMines() {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                cells[i][j].setRevealed(true);
            }
        }
    }

    public boolean isGameWon() {
        int unrevealedCount = 0;
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (!cells[i][j].hasMine() && !cells[i][j].isRevealed()) {
                    unrevealedCount++;
                }
            }
        }
        return unrevealedCount == numMines;
    }

    public boolean isCellRevealed(int row, int col) {
        return cells[row][col].isRevealed();
    }

    public int getSize() {
        return size;
    }
}

class Cell {
    private boolean hasMine;
    private boolean isRevealed;
    private int adjacentMines;

    public Cell() {
        this.hasMine = false;
        this.isRevealed = false;
        this.adjacentMines = 0;
    }

    public boolean hasMine() {
        return hasMine;
    }

    public void setMine(boolean hasMine) {
        this.hasMine = hasMine;
    }

    public boolean isRevealed() {
        return isRevealed;
    }

    public void setRevealed(boolean revealed) {
        isRevealed = revealed;
    }

    public int getAdjacentMines() {
        return adjacentMines;
    }

    public void setAdjacentMines(int adjacentMines) {
        this.adjacentMines = adjacentMines;
    }

    public String getDisplayValue() {
        if (hasMine) {
            return "X";
        } else if (adjacentMines > 0) {
            return Integer.toString(adjacentMines);
        } else {
            return " ";
        }
    }
}
