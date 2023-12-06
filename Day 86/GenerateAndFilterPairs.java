import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
public class GenerateAndFilterPairs {
    public static void main(String[] args) {
        List<Integer> ls1 = Arrays.asList(1,2,3);
        List<Integer> ls2 = Arrays.asList(4,5,6);
        generateAndFilterPairs(ls1, ls2).stream()
                                        .forEach(pair -> System.out.println(Arrays.toString(pair)));
    }
    public static List<int[]> generateAndFilterPairs(List<Integer> list1, List<Integer> list2) {
        List<int[]> pairs=list1.stream()    
                                .flatMap(i -> list2.stream().map(j-> new int[]{i,j})) // generate pairs
                                .filter(pair->(pair[0]+pair[1])%3==0)
                                .collect(Collectors.toList());

        return pairs;
    }
}

