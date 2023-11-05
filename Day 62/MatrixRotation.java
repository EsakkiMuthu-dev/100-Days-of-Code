import java.util.Arrays;
public class MatrixRotation {

    public static void main(String[] args) {
        int[][] matrix= {
            {1, 2,  3},
            {4, 5,  6},
            {7, 8,  9}
        
        };
        int deg=180;
        while(deg>0)
        {
            System.out.println(deg);
            rotation(matrix);
            deg=deg-90;  
        }
        
        
        for(int i=0;i<matrix.length;i++)
        System.out.println(Arrays.toString(matrix[i]));

    }

    public static void rotation(int[][] matrix)
    {
        // first step tranpose
        int n = matrix.length;

        for(int i=0;i<matrix.length;i++)
        {
            for(int j=i;j<matrix[i].length;j++)
            {
                // swap
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i]=temp;
            }
        }

        for(int i=0;i<matrix.length;i++)
        {
            for(int j=0;j<n/2;j++)
            {
                //swap
                int temp = matrix[i][j]; 
                matrix[i][j]=matrix[i][n-j-1];
                matrix[i][n-j-1]=temp;      
                                         //0,0->1
                                         //0,2->7              
                                         // 1,0 -> 2
                                         // 1, 2  -> 8
                                         // j=0 ,n=3-> n-j= 3-0=3-1=2 
            }
        }

    }

}
