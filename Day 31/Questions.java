import java.util.Scanner;

public class Questions {
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();
        System.out.println("Is prime: "+isPrime(num));
        System.out.println("Is armstrong number: "+isArmstrong(num));
        allThreeDigitArmstrong();
        in.close();
    }

    static void allThreeDigitArmstrong()
    {

        for(int i =100;i<1000;i++)
        {
            if (isArmstrong(i))
            {
                System.out.println(i);
            }
        }
    }

    static boolean isArmstrong(int num)
    {
        int temp =num;
        int sum =0,rem;
        while(num>0)
        {
            rem=num%10;
            sum+=(rem*rem*rem);
            num/=10;
        }
        return temp == sum;

    }

    static boolean isPrime(int num)
    {
        if(num < 1) return false;

        int c=2;
        while(c*c <=num)
        {
            if (num %c == 0)
            {
                return false;
            }
            c++;
        }
        return c*c > num;
    }
}
