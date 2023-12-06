import java.util.Arrays;
import java.util.List;
import java.util.OptionalInt;

public class StreamQuestion3 {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("java", "stream", "operations", "are", "powerful");
        OptionalInt len = words.stream()
                              .mapToInt(String::length)
                               .reduce((x,y)->x+y);
        System.out.println(len.getAsInt());

//         OptionalInt totalLength = words.stream()
//                               .mapToInt(String::length)
//                               .reduce((x, y) -> x + y);
// System.out.println(totalLength.getAsInt());

    }
}
