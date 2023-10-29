import java.util.Arrays;
import java.util.Collections;
public class Factors {
/*
    
2) 
To find the factors of the numbers given in an array and to sort the numbers in descending order
    according to the factors present in it.
    Input:
    Given array : 8, 2, 3, 12, 16
                  2  1   1  3   3  
                   
    
    Output:
    12, 16, 8, 2, 3

    First Part:
        Find factors of given number in an arr

    Second Part:
        Factor Class -> val , factors

    Third Part:
    comparable sort


*/
    public static void main(String[] args) {
        int[] arr ={8, 2, 3, 12, 16};
        // factor(arr);
        getFactorsCount(arr);
    }
    // public static void factor(int[] arr)
    // {
        
        

    // }

    public static void  getFactorsCount(int[] arr )
    {
        // ArrayList<Factor> factors = new ArrayList<>();
        Factor[] factors = new Factor[arr.length];
        for(int i=0;i<=arr.length-1;i++)
        {
            int count =0;
           for(int j=0;j<=arr.length-1;j++)
           {
                if(arr[i]%arr[j]==0) count+=1;

           }
           System.out.println("arr "+arr[i] +" count: "+count);
           Factor factor =new Factor(count, arr[i]);
           factors[i]=factor;
        }
        System.out.println(Arrays.toString(factors));
        Arrays.sort(factors);
        System.out.println(Arrays.toString(factors));
      
    }
}
