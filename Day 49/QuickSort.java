import java.util.Arrays;
public class QuickSort
{
    public static void main(String[] args)
    {
        int[] arr = {2,9,1,3,10,11,23};
        System.out.println(Arrays.toString(arr));
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
        // quickSort();
    }
    public static void quickSort(int[] arr,int left,int right)
    {
        //   step 1: take pivot element (mid,arr[0], arr[n-1])
        //   step 2: check whether  the pivot is in correct pos
        //   step 3: sort the pivot to find its correct pos
        int leftBoundary =left;
        int rightBoundary =right;
        int start=leftBoundary;
        int end =rightBoundary;
        int mid= (start+(end-start))/2; //
        while(left<right)
        {
            //left most elements must be smaller than mid
            while(arr[start]<mid)start++;
            
        }
    }
}