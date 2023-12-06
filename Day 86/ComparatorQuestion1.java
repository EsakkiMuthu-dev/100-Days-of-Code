import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class ComparatorQuestion1 {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("apple", "kiwi", "banana", "orange", "grape");

        // Your code here
        Comparator<String> customComparator = (s1,s2)->{
            if(s1.length()==s2.length()){
               
                return s1.compareToIgnoreCase(s2);
            }else{
                return Integer.compare(s1.length(), s2.length());
            }
        };
        words.sort(customComparator);
        System.out.println(words);
        words.forEach(System.out::println);
    }
}
