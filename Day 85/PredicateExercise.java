import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class PredicateExercise {

    public static void main(String[] args) {
        // 1. Create a List<Integer> called numbers containing some random integers.
        List<Integer> numbers = Arrays.asList(2,1,5,7,32,89,23,67,40);

        // 2. Define a Predicate<Integer> named isEven to check if a number is even.
        Predicate<Integer> isEven = i->(i%2==0);
        // 3. Use the isEven predicate to filter and print only the even numbers from the numbers list.
        System.out.println("Even Numbers:");
        // Your code here
        for(int num:numbers){
            if(isEven.test(num)) System.out.println(num);
        }
        // 4. Define another Predicate<Integer> named isGreaterThanTen to check if a number is greater than 10.
        Predicate<Integer> isGreaterThanTen = i->(i>10);

        // 5. Use the isGreaterThanTen predicate to filter and print only the numbers greater than 10.
        System.out.println("Numbers Greater Than 10:");
        // Your code here
        for(int num:numbers)
        {
            if(isGreaterThanTen.test(num)) System.out.println(num);
        }
    }
}

