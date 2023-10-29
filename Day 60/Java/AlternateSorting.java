import java.util.Arrays;
class AlternateSorting{
/*
     *
     
1) Alternate sorting: Given an array of integers, rearrange the array in such a way that the first
element is first maximum and second element is first minimum.

Eg.) Input : {1, 2, 3, 4, 5, 6, 7}
Output : {7, 1, 6, 2, 5, 3, 4}


    */

    public static void main(String[] args)
    {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }

     public static void sort(int[] arr)
     {
        // S1:
       
      for(int j=0;j<arr.length-1;j+=2)
      {
        for(int i=arr.length-1;i>j;i--)
            {
            // {1, 2, 3, 4, 5, 6, 7}
            // swap
                int temp=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=temp;
            }
    }
      

     }
}