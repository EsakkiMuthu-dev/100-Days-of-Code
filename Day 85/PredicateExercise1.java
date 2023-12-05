
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class PredicateExercise1 {
    /*
     * Exercise 1:
Create a List<String> containing some words.

Define a Predicate<String> named startsWithA to check if a word starts with the letter 'A'.

Use the startsWithA predicate to filter and print only the words starting with 'A' from the list.
     */
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Hello","Ace","May","April");
        Predicate<String> startsWithA=s->(s.toLowerCase().startsWith("a"));
        System.out.println("String starts with letter A : ");
        for(String str:list)
        {
            if(startsWithA.test(str)) System.out.println(str);
        }
    }
}
