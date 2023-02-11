import java.util.Scanner;

public class Count {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter an number : ");
        int number = sc.nextInt();
        System.out.println("Which number is to count in this number : ");
        int val =sc.nextInt(),num,count=0;

        System.out.println();
        while(number != 0)
        {
            num = number %10;
            if(num == val)
            {
                count+=1;
            }
            number = number /10;
        }
        System.out.println(count);
        sc.close();
    }
}
