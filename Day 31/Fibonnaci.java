import java.util.Scanner;

public class Fibonnaci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an number to print Fibonnaci Sequence: ");
        int n = sc.nextInt();
        int a = 0;
        int b = 1,c;
        if(n==1){
            System.out.println(a);
            
        }else{
            System.out.println(a);
            System.out.println(b);
            for(int i =2 ; i<n;i++)
            {
                c = a+b;
                System.out.println(c);
                a=b;
                b=c;
            }
        }

        sc.close();
    }
}
