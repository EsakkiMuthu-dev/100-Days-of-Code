import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class ComparatorQuestion2 {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5, -3, 8, -2, 0, -7);

        // Your code here
        Comparator<Integer> customComparator = (n1,n2)->Integer.compare(Math.abs(n2), Math.abs(n1));
        numbers.sort(customComparator);
        numbers.forEach(System.out::println);
        
    }
}
