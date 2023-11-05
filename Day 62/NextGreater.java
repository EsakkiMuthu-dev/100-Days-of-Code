public class NextGreater {
    /*
     * . 
     * \
You’re given an array. Print the elements of the array which are greater than its previous elements
in the array.
Input : 2, -3, -4, 5, 9, 7, 8 Output: 2 5 9You should solve this question in O(n) time.
*/
    public static void main(String[] args) {
     int[] arr={2, -3, -4, 5, 9, 7, 8};
    //  greaterThanItsPrevious(arr);   
     greaterThanItsNext(arr);
     greaterThanItsBoth(arr); 
     
     // 2,-3 ,9   
    }
    public static void greaterThanItsPrevious(int[] arr)
    {
        System.out.print(arr[0]+", ");
        for(int i=1;i<arr.length;i++)
        {
            if(arr[i]>arr[i-1]){
                System.out.print(arr[i]+", ");
            }
        }
    }

    public static void greaterThanItsNext(int[] arr)
    {
        // int[] arr={2, -3, -4, 5, 9, 7, 8};
        // i =2 ->-4  3->5
        System.out.println();
        for(int i=0;i<arr.length-1;i++)
        {
            if(arr[i]>arr[i+1])
            {
                System.out.print(arr[i]+", ");
            }
        }
        System.out.println();

    }
public static void greaterThanItsBoth(int[] arr)
    {
        // int[] arr={2, -3, -4, 5, 9, 7, 8};
        // i =2 ->-4  3->5
        System.out.println();
        for(int i=1;i<arr.length-1;i++)
        {
            if(arr[i]>arr[i+1] && arr[i]>arr[i-1])
            {
                System.out.print(arr[i]+", ");
            }
        }
        System.out.println();

    }

}
