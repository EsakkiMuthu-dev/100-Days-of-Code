public class MatrixSum {
    public static void main(String[] args) {
        int[][] biggerMatrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12},
            {13, 14, 15, 16}
        };

        int[][] smallerMatrix = {
            {7, 8},
            {11, 14}
        };
        
        if (isMatrixPresent(biggerMatrix, smallerMatrix)) {
            System.out.println("TRUE");
        } else {
            System.out.println("FALSE");
        }

    }

    public static boolean isMatrixPresent(int[][] biggerMatrix,int[][] smallerMatrix)
    {

        int n = biggerMatrix.length;
        int m= smallerMatrix.length;
        for(int i=0;i<=n-m;i++)
        {
            for(int j=0;j<=n-m;j++)
            {
                if(isSubMatrixPresent(biggerMatrix,smallerMatrix,i,j))
                {
                    return true;
                }
            }
        }

        return false;
    }

    public static boolean isSubMatrixPresent(int[][] biggerMatrix, int[][] smallerMatrix,int row,int col)
    {
        int m = smallerMatrix.length;

        for(int i =0;i<m;i++)
        {
            for(int j=0;j< m;j++)
            {
                if(smallerMatrix[i][j]!= biggerMatrix[row+i][col+j])
                {
                    return false;
                }
            }
        }



        return true;

    }
}
