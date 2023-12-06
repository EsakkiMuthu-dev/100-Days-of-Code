import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamQuestion5 {
    public static void main(String[] args) {
        List<List<Integer>> listOfLists = Arrays.asList(
                Arrays.asList(1, 2, 3),
                Arrays.asList(4, 5),
                Arrays.asList(6, 7, 8)
        );

        List<Integer> allElements = listOfLists.stream()
                                                .flatMap(ls::stream)
                                                .collect(Collectors.toList());
        System.out.println(allElements);
    }
}
