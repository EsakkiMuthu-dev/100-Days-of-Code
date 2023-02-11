import java.util.Scanner;

public class Function {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        System.out.println("Enter two numbers : ");
        int num1 =in.nextInt();
        int num2 = in.nextInt();
        int ans = sum(num1,num2);
        System.out.println(ans);
        in.close();
    }

    static int sum(int x , int y){
        int sum = x+y;
        return sum;
    }
}
