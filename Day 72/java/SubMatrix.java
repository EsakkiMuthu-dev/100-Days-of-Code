public class SubMatrix{
    public static void main(String[] args)
    {

        int[][] biggerMatrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12},
            {13, 14, 15, 16}
        };

        int[][] smallerMatrix = {
            {2,3},
            {11, 12}
        };
        System.out.println(isMatrixPresent(biggerMatrix,smallerMatrix));
    }

    public static boolean isMatrixPresent(int[][] biggerMatrix, int[][] smallerMatrix)
    {
        int m = biggerMatrix.length; //4
        int n= smallerMatrix.length;// 2

        for(int i=0;i<= m-n;i++)
        {
            for(int j=0;j<=m-n;j++)
            {
                if(isSubMatrixPresent(biggerMatrix,smallerMatrix,i ,j))
                {
                    return true;
                }
            }

        }
        return false;
    } 

    public static boolean isSubMatrixPresent(int[][] biggerMatrix , int[][] smallerMatrix,int row,int col)
    {

        int n= smallerMatrix.length;
        int x=row;
        int y =col;
        for(int i=0;i<n;i++)
        {

            y=col;
            for(int j=0;j<n;j++)
            {

                if(biggerMatrix[row+i][col+j] != smallerMatrix[i][j])
                {
                    return false;
                }
                y++;
            }
            x++;

        }

        return true;
    } 

}