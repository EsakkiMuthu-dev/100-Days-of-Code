import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
public class PredicateExercise3 {
/*
* 
Exercise 4:
Create a List<Integer> containing a mix of positive and negative numbers.

Define a Predicate<Integer> named isEvenAndPositive to check if a number is both even and positive.

Use the isEvenAndPositive predicate to filter and print only the numbers that are both even and positive from the list.

*/
    public static void main(String[] args) {
        List<Integer> list =Arrays.asList(2,-4,8,11,-2,-37,21,-67);
        Predicate<Integer> isEven = i->(i%2==0);
        Predicate<Integer> isPositive=i->(i>=0);
        System.out.println("Postive Even Numbers: ");
        for(int num:list)
        {
            // if(isEven.test(num) && isPositive.test(num)) 
            // if(isEven.and(isPositive).test(num))
            if(isEven.negate().and(isPositive).test(num)) 

            System.out.println(num);
        }
    }
}
