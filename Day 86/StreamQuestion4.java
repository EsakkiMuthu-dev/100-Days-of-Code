import java.util.Arrays;
import java.util.List;

public class StreamQuestion4 {
    public static void main(String[] args) {
        List<String> sentences = Arrays.asList("Java streams are powerful", "Streams provide concise syntax", "Powerful streams");

        // Your code here
        long count = sentences.stream()
                             .distinct()
                            .count();
        System.out.println(count);
    }
}
