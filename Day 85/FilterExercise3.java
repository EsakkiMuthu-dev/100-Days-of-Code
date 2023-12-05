import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class FilterExercise3 {
    /*
     * Exercise 3:
Create a list of doubles containing both positive and negative numbers.

Use the filter operation to create a new list that only contains the positive numbers.
     */
    public static void main(String[] args) {
        List<Double> numbers=new ArrayList<>();
        numbers.add(2.89);
        numbers.add(-389.82);
        numbers.add(6712.367);
        numbers.add(-332789.82);
        numbers.add(-378.26);
        numbers.add(-389.372);
        List<Double> positiveNumbers = new ArrayList<>();
        positiveNumbers=numbers.stream()
                .filter(num->num>=0)
                .collect(Collectors.toList());
        System.out.println(positiveNumbers);

        
    }
}
