import java.util.Arrays;
public class Reverse {
/*
6. Using Recursion reverse the string such as
Eg 1: 
Input: one two three
Output: three two one

Eg 2: 
Input: I love india
Output: india love I

*/
    public static void main(String[] args) {
        String input = "one two three";
        System.out.println(Arrays.toString(input.split(" ")));
        reverse(input.split(" "),0);
        System.out.println();
    }
    public static void reverse(String[] input,int index)
    {
        if(index>=input.length)
        {
            return;
        }
        reverse(input, index+1);
        System.out.print(input[index]+" ");
    }
}
