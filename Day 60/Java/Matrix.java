import java.util.Arrays;
public class Matrix {

    public static void main(String[] args) {
        int[] arr = new int[4];
        for(int i=0;i<arr.length;i++)
        {

        }
            //     [1,2,3,4]
            // =>[][]  
            /*  [
                  [1, 5,  5],
                  [1, 2,  6],
                  [7, 3,  8],
                  [9, 3, 10]
                             ]  arr[2][1]*/
        int[][] arr2= new int[4][3];
        int count=1;
        for(int i=0;i<arr2.length;i++)
        {
            // System.out.println(arr2[i].length);
            // System.out.println(Arrays.toString(arr2[i]));
            for(int j=0;j<arr2[i].length;j++)
            {
                arr2[i][j]=count;
                count=count+1;
            }
        }
        
        //print
        for(int i=0;i<arr2.length;i++)
        {
            System.out.println(Arrays.toString(arr2[i]));
        }
        



    }
 
}
