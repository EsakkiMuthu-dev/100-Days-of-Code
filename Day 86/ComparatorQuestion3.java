import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class ComparatorQuestion3 {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John Doe", "Alice Smith", "Bob Johnson", "Eve Brown");

        // Your code here
        Comparator<String> customComparator=(s1,s2)->{
            String a=s1.split(" ")[1];
            String b = s2.split(" ")[1];
            return b.compareTo(a);
        };
        names.sort(customComparator);
        names.forEach(System.out::println);
    }
}
