/*

Alternate sorting: Given an array of integers, rearrange the array in such a way that the first
element is first maximum and second element is first minimum.
Eg: 
         |
Input : {1, 2, 3, 4, 5, 6, 7}
                         |       
step :               7 1 2 3 4 5 6
                            |
                    7 1 6 2 3 4 5
                                |
                    7 1 6 2 5 3 4
Output : {7, 1, 6, 2, 5, 3, 4}

*/
import java.util.Arrays;
public class AlternateSort
{
    public static void main(String[] args)
    {
        int[] arr={1, 2, 3, 4, 5, 6, 8}; //[8, 1, 6, 2, 5, 3, 4]
        alternateSort(arr);
        alternateSort2(arr);
        System.out.println(Arrays.toString(arr));
    }
    public static void alternateSort2(int[] arr)
    {

        //Input : {1, 2, 3, 4, 5, 6, 7}
        int first=0;
        int last = arr.length-1;
        while(first<last)
        {
            for(int i=last;i>first;i--)
            {
                int temp =arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=temp;
            }
            first+=2;
        }
        

    }


    public static void alternateSort(int[] arr)
    {
        //brute force approach -> sort the arr inplace
        // 1. create empty array --> done
        // 2. create two pointer first and last -->
        // 3. append last and first
        // 4. update the pointer
        // Input : {1, 2, 3, 4, 5, 6, 8}
        //  Output : {7, 1, 6, 2, 5, 3, 4}
        // ours op:[7, 1, 6, 2, 5, 3, 4]


        int n= arr.length; //7
        int[] newArr= new int[n];  //{7,1,0,0,0,0,0}
        int first=0; // 1
        int last=arr.length-1; // 8
        int i=0;
        while(first<=last) // 1<7 == true
        {
            newArr[i]=arr[last]; // 0
            last--; 
            if(i+1<n) newArr[i+1]=arr[first]; // 1
            i+=2;
            first++; //2
            
        }
         System.out.println(Arrays.toString(newArr));

        
    }
}