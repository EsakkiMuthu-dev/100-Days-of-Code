import java.util.Arrays;

public class Transpose {

   public static void main(String[] args) {
    int[][] matrix= {
        {1,2,3}, //0,1 -> 1,0 , 0,2 ->2,0
        {4,5,6},
        {7,8,9}
    };

    /*
     * 1 4 7
     * 2 5 8
     * 3 6 9 
     */
    
     transpose(matrix);
     for(int i=0;i<matrix.length;i++)
     {
        System.out.println(Arrays.toString(matrix[i]));
     }

   }
   public static void transpose(int[][] matrix)
   {
    for(int i=0;i<matrix.length;i++)
    {
        for(int j=i;j<matrix[i].length;j++)
        {
            //swap
            int temp =matrix[i][j]; // 0,1 -
            matrix[i][j]= matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    int n = matrix.length;
    for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix.length / 2; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }

   } 
}
