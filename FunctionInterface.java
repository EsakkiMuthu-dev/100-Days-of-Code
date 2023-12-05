import java.util.function.Function;
import java.util.List;
import java.util.Arrays;
public class FunctionInterface {
    /*
     * Exercise 1:
Create a List<Integer> containing some numbers.

Use a Function<Integer, String> to convert each number to its squared string representation.


     */
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1,3,2389,534,22,19,12);
        Function<Integer,String> squareString = i->String.valueOf(i*i);
        System.out.println("Square Numbers are : ");
        for(int num : list)
        {
            System.out.println(squareString.apply(num));
        }

    }
}
