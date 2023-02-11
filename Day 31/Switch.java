import java.util.Scanner;

public class Switch {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        String fruit = in.next();

        switch(fruit)
        {
            case "Mango":
                System.out.println("Mango");
                break;
            case "Apple":
                System.out.println("Apple");
                break;
            case "Grapes":
                System.out.println("Grapes");
                break;
            default:
                System.out.println("Invalid !!");
        }
        int day =in.nextInt();
        switch(day)
        {
            case 1,2,3,4,5 -> {
                System.out.println("WeekDays");
                System.out.println("helo");
            }
            case 6,7 -> System.out.println("Weekend");
        }
        in.close();
    }
}
