
import java.util.Scanner;


public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        // int arr[] =new int[5];
        // System.out.println("Enter 5 el: ");

        // for(int i=0;i<5;i++)
        // {
        //     arr[i] =sc.nextInt();
        // }
        // // print those val
        // for(int j =0;j<5;j++)
        // {
        //     System.out.print(arr[j]+" ");
        // }
        // // print efficient way
        // for(int num :arr)
        // {
        //     System.out.println(num);
        // }
        // System.out.println(Arrays.toString(arr));
        // arr[1] =20; 
        // System.out.println(Arrays.toString(arr));
        // int[] arr = {1,2,3,4,56};
        // System.out.println(Arrays.toString(arr));
        // change(arr);
        // System.out.println(Arrays.toString(arr));
        //int[][] arr1 = new int[3][];
        // int[][] arr1 ={{1,2,3},{4,5,6},{7,8,9}};
        // System.out.println(arr1.length);
        // for(int[] row:arr1)
        // {
        //     System.out.println(row);
        //     for(int col:row)
        //     {
        //         System.out.println(col);
        //     }
            
        // }            System.out.println(row);
        //     for(int col:row)
        //     {
        //         System.out.println(col);
        //     }

        // }
        // System.out.println(arr1[1][0]);

        // multi Dimesnion array input
        // int[][] arr = new int[3][2];
        // System.out.println("How many rows you want: ");
        // int row = sc.nextInt();
        // System.out.println("how Many cols you want: ");
        // int col = sc.nextInt();
        // int[][] arr = new int[row][col];
        // System.out.println("Enter "+row*col+" elements");
        // for(int i=0; i<row;i++)
        // {
        //     for(int j =0;j<col;j++)
        //     {
                
        //         arr[i][j] =sc.nextInt();
        //         // System.out.println("added "+ arr[row][col]);
        //     }
        //     // System.out.println("added "+ arr[row][col]);
        // }
        //  for jagged arr
        System.out.println("How many rows you want: ");
        int row = sc.nextInt(),col;
        int[][] arr = new int[row][];
        for(int i=0;i<row;i++)
        {
            System.out.println("how many elements u r going to add in this row "+i+1);
            col = sc.nextInt();
            arr[i]=new int[col];
            System.out.println("Enter "+col+" elements");
            for(int j =0;j< col;j++)
            {
                arr[i][j] = sc.nextInt();
            }
        }
        // for(int r[]:arr)
        // {
        //     for(int c: r) {
        //         System.out.print(c+" ");
        //     }
        // } 
        // System.out.print("end!");
        // sc.close();
        for(int i =0;i<row;i++)
        {
            for(int j =0;j<arr[i].length;j++)
            {
                System.out.print(arr[i][j]+" ");
            }
            System.out.println( );
        }
    }
    static void change(int[] arr)
    {
        int n = arr.length;
        arr[n-1] = 5;
    }
}
