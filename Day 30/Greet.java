import java.util.Scanner;
public class Greet {
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter ur name: ");
        String name = sc.nextLine();
        System.out.println("Hii "+name);
        sc.close();
    }
}
