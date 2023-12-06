import java.util.Arrays;
import java.util.List;

public class ParallelVsSequentialExample {
    public static void main(String[] args) {
        List<Integer> data = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Sequential stream
        long startTime = System.nanoTime();
        long sumSequential = data.stream().mapToLong(Integer::longValue).sum();
        long endTime = System.nanoTime();
        System.out.println("Sequential Sum: " + sumSequential);
        System.out.println("Sequential Time: " + (endTime - startTime) + " ns");

        // Parallel stream
        startTime = System.nanoTime();
        long sumParallel = data.parallelStream().mapToLong(Integer::longValue).sum();
        endTime = System.nanoTime();
        System.out.println("Parallel Sum: " + sumParallel);
        System.out.println("Parallel Time: " + (endTime - startTime) + " ns");
    }
}