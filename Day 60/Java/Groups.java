public class Groups {
/*

2) To find the number of groups and output the groups:
Explanation: To find the sum of the elements in the groups and that sum should be divisible by
input X and the groups should be limited to range with X numbers.
If X is 3, then the group should have only 2 elements and 3 elements from the array whose sum is
divisible by 3.
Input:
Array: 3, 9, 7, 4, 6, 8
X: 3
Output:
3, 9
3, 6
9, 6
3, 9, 6
No of groups: 4

 */
    public static void main(String[] args) {
        int[] arr ={3, 9, 7, 4, 6, 8};
        int x =3;
        group(arr,x);
    }
    public static void group(int[] arr,int x)
    {

        for(int i=0;i<=arr.length-1;i++)
        {
            
            for(int j=1;j<arr.length;j++)
            {
                if((arr[i]+arr[j])%x==0)
                {
                    System.out.println("Value: "+arr[i]+" , "+arr[j]);
                }
            }
        }
    }
}
