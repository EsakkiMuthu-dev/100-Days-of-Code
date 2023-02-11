import java.util.Scanner;

public class Simple {
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        // System.out.print("Enter the principal:");
        // int p =sc.nextInt();
        // System.out.print("Enter an time period in years: ");
        // int t =sc.nextInt();
        // System.out.print("Enter an rate of interest :  ");
        // int r = sc.nextInt();

        // int si = (p*r*t)/100;
        // System.out.println();
        // System.out.println("Your SI : "+si);
        System.out.println("Enter num1 and num2");
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        if (num1 > num2)
        {
            System.out.println("Largest element is : "+num1);

        }else{
            System.out.println("Largest element is : "+num2);
        }
        // boolean run =true;
        // while(run)
        // {
        //     System.out.println("Enter an Operand to perfom: ");
        //     char operand =sc.next().charAt(0);
        //     if(operand == '+')
        //     {
        //         System.out.println(num1+num2);
        //     }
        //     else if (operand == '-')
        //     {
        //         System.out.println(num1-num2);
    
        //     }else if(operand == '*')
        //     {
        //         System.out.println(num1*num2);
        //     }else if (operand == '/')
        //     {
        //         System.out.println(num1/num2);
        //     }

        //     System.out.println("Do you want to continue: (y/n)");
        //     char choice = sc.next().charAt(0);
        //     if(choice != 'y')
        //     {
        //         run = false;
        //     }
    
        // }
      

        sc.close();
    }
}
