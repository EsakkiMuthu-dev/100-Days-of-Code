import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class PredicateEXercise2 {
    /*
     * Exercise 2:
Create a List<Double> containing some decimal numbers.

Define a Predicate<Double> named isPositive to check if a number is positive (greater than 0).

Use the isPositive predicate to filter and print only the positive numbers from the list.


     */
    public static void main(String[] args) {
        List<Double> numbers=Arrays.asList(23.90,-67.12,3.79,-52.89);
        
        Predicate<Double> isPositive =d->(d>0);
        System.out.println("Postive Numbers From the List: ");
        for(Double num: numbers)
        {
            if(isPositive.test(num)) System.out.println(num);
        }

    }
}
