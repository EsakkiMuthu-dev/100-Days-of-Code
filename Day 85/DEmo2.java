import java.util.function.Predicate;
public class DEmo2 {
    public static void main(String[] args) {
        Predicate<Integer> isEven=i->(i%2==0);
        System.out.println(isEven.test(2));
        System.out.println(isEven.test(3));
        System.out.println(isEven.test(6));
        System.out.println(isEven.test(9));
    }
}
