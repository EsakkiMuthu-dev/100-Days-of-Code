import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FilterExercise1 {
    /*
     * Exercise 1:
Create a list of integers containing both even and odd numbers.

Use the filter operation to create a new list that only contains the even numbers
     */
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1,3,4,25,2,27,89,32);
        // List<Integer> evenNumbers = new ArrayList<>();
        // evenNumbers=numbers.stream().filter(num->num%2==0).collect(Collectors.toList());
        // System.out.println(evenNumbers);
        numbers.stream()
                .filter(num->num%2==0)
                // .forEach(n -> System.out.println(n));
                .forEach(System.out::println);
    }
}
