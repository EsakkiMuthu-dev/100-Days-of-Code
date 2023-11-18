public class Demo{
    public static void main(String[] args) {
        int[] arr ={1,2,3,4,5};
        // we can use for each loop for arrays and string-> i.e Sequence of Characters
        // Enchaneced for loop -> for each loop
        int[][] arr2={
            {1,2,3},
            {4,5,6}
        };
        
        for(int[] a:arr2)
        {
            System.out.println(a);
        }

        for(int a:arr)
        {
            System.out.println(a);
        }
        
    }
}