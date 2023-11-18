public class Matrix {
    public static void main(String[] args) {
        int[][] biggerMatrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12},
            {13, 14, 15, 16}
        };

        int[][] smallerMatrix = {
            {6, 9},
            {10, 11}
        };

        if (isMatrixPresent(biggerMatrix, smallerMatrix)) {
            System.out.println("TRUE");
        } else {
            System.out.println("FALSE");
        }
    }

    private static boolean isMatrixPresent(int[][] biggerMatrix, int[][] smallerMatrix) {
        int n = biggerMatrix.length;
        int m = smallerMatrix.length;

        for (int i = 0; i <= n - m; i++) {
            for (int j = 0; j <= n - m; j++) {
                if (isSubMatrix(biggerMatrix, smallerMatrix, i, j)) {
                    return true;
                }
            }
        }
        return false;
    }

    private static boolean isSubMatrix(int[][] biggerMatrix, int[][] smallerMatrix, int row, int col) {
        int m = smallerMatrix.length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < m; j++) {
                if (biggerMatrix[row + i][col + j] != smallerMatrix[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
}
