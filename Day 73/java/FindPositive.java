import java.util.Arrays;
public class FindPositive {

    /*
     * [0, 1,0, 1, 1, 0, 0,1,1] -> 8
     * 
     * [0,0,1,1,0,0]
     * [1,0,0,0,0,1] -> 2
     * l->4 ar->
     */
    public static void main(String[] args) {
        int[] arr={3, 4, -1, 1};
        findMissing(arr);
    }

    public static void findMissing(int[] arr)
    {
        // s1: rearrange -> [3,4,1,-1]->
        // iterating array
        // 3 -> [3,4,1,-1]  index = 3-1=> 2 after swap => [1,4,3,-1]
        // 4-> [1,4,3,-1] index = 4-1=> 3  after swap => [1,-1,3,4]
        // 3->
        // 4 ->
        // final aray [ 1,-1,3,4]
        // 
        System.out.println(Arrays.toString(arr));
        //rearrang the array
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]>0)
            {
                arr[i]=i+1;
            }
        } 
        System.out.println(Arrays.toString(arr));
    }
    public static void swap(int[] arr ,int start , int end)
    {
        int temp = arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
    }
}
