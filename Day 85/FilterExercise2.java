import java.util.Arrays;
import java.util.List;

public class FilterExercise2 {
    /*
     * Exercise 2:
     * Create a list of strings representing names.
     * 
     * Use the filter operation to create a new list that only contains names
     * starting with the letter "A."
     */
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Muthu", "Bharathi", "Alex", "April", "Esakki", "May");
        names.stream()
            .filter(name -> name.startsWith("A"))
            .forEach(System.out::println);
    }
}
