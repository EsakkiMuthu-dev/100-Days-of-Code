public class MisMatched {
    /*

4. Print the numbers which are mismatched from two array.
Arr1 = {a b c d e f g h i}
arr2 ={ a b d e e g g i i},
 O/P- cd, de, fg, hi.

*/
    public static void main(String[] args) {
        char[] arr1 ={'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ,'i'};
        char[] arr2={ 'a', 'b', 'd', 'e', 'e', 'g', 'g', 'i', 'i'};
        mismatch(arr1,arr2);
    }

    public static void mismatch(char[] arr1, char[] arr2)
    {
        //S1: 

        for(int i=0;i<arr1.length;i++) 
        if(arr1[i] != arr2[i]) System.out.print(arr1[i]+""+arr2[i]+", ");
    

    }
    
}
