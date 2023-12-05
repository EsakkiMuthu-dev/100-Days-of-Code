import java.util.Arrays;
import java.util.List;

class Person{
    String name;
    int age;
    Gender gender;
    public Person(String name,int age,Gender gender)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    @Override
    public String toString()
    {
        return this.name+" "+ this.age+" "+this.gender;
    }
}
public class FilterExercise4 {
    /*
     *
Certainly! Here are some more challenging exercises using the filter operation. Each exercise includes a sample input and output to illustrate the expected result.

Exercise 1:
Input:

Create a list of Person objects with attributes like name, age, and gender.
Task:

Use the filter operation to create a new list containing only female persons under the age of 30.
Sample Input:
     */
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
        new Person("Alice", 25, Gender.Female),
        new Person("Bob", 35, Gender.Male),
        new Person("Carol", 28, Gender.Female)
        // Add more persons\
        );
        people.stream()
            .filter(person -> person.gender==Gender.Female && person.age<30)
            .forEach(System.out::println);

    }
}
