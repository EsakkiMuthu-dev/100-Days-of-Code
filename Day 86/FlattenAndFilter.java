import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
public class FlattenAndFilter {
    public static void main(String[] args) {
        List<Integer> ls1 = Arrays.asList(1,2,3,4);
        List<Integer> ls2 = Arrays.asList(11,22,33,14);
        List<Integer> ls3 = Arrays.asList(6,3,7,8);
        List<List<Integer>> totalList = Arrays.asList(ls1,ls2,ls3);
        flattenAndFilter(totalList);
    }
    public static List<Integer> flattenAndFilter(List<List<Integer>> nestedLists) {
        List<Integer> result = nestedLists.stream()
                                           .flatMap(ls::stream)
                                           .filter(n->n%2!=0)
                                           .collect(Collectors.toList());

        return result;

    }
}
