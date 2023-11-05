public class MinimumAmongAll {
/*

 1) Given an array, find the minimum of all the greater numbers for each element in the
array.
Sample:
Array : {2, 3, 7, 1, 8, 5, 11}
Output:
{2>3, 3>5, 7>8, 1>2, 8>11, 5>7, 11>}


 */
    public static void main(String[] args) {
        int[] arr={2, 3, 7, 1, 8, 5, 11};
        mini(arr);    
    }
    public static void mini(int[] arr)
    {
   
       for(int i=0;i<arr.length;i++)
       {
            System.out.print(arr[i]+">"+findMin(arr,arr[i])+", ");
       }
    }
    public static int findMin(int[] arr,int el)
    {
        int min=7321898;
        //{2, 3, 7, 1, 8, 5, 11}
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]> el) // 3
            {
                min= arr[i]<min?arr[i]:min; // 7<3
            }
        }

        return min==7321898?0:min;
    }

}
