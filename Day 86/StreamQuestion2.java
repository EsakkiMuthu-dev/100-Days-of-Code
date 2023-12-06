import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamQuestion2 {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("apple", "banana", "kii", "orange", "grape");
        List<String> longWords= words.stream() 
                                       .filter(str->str.length()>3)
                                       .collect(Collectors.toList());
        System.out.println(longWords);
        
    }
}
