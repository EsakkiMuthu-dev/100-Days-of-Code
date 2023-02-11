import java.util.Scanner;

public class Asignments {
    public static void main(String[] args) {
        Scanner in =new Scanner(System.in);
        System.out.print("Enter three Numbers: ");
        int num1 =in.nextInt();
        // int num2 = in.nextInt();
        // int num3 = in.nextInt();
        // max(num1,num2,num3);
        // min(num1,num2,num3);
        // evenOdd(num3);
        // isEligible(num1);
        // sum(num1,num2);
        // product(num1, num2);
        // areaCircum(num2);
        // isLeap(num1);
        // factorial(num1);
        // isPythagornTriplet(num1, num2, num3);
        // primeNumbers(num1, num2);
        System.out.println(num1*(num1+1)/2);
        in.close();
    }
    static void primeNumbers(int a, int b){
        while(a<=b)
        {
            if(isPrime(a))
            {
                System.out.print(a+" ");
            }
            a++;
        }
    }
    static boolean isPrime(int a)
    {
        if(a < 1) return false;
        int i =2;
        while( i*i <= a)
        {
            if(a%i == 0) return false;
            i++;
        }
        return i*i > a;
    }
    static void isPythagornTriplet(int a,int b,int c)
    {
        int left = a*a+ b*b;
        if(left == c*c){
            System.out.println("yes it is!");
        }
        else{
            System.out.println("no its not");
        }
    }
    static void isLeap(int yr)
    {
        if(yr%4 ==0 && yr%100 !=0 || yr%400 ==0)
        {
            System.out.println("Leap year");
        }else{
            System.out.println("not Leap year");
        }
    }

    static void factorial(int n){
        int fact =1;
        int i =1;
        while(i<=n)
        {
            fact*=i;
            i++;
        }
        System.out.println(fact);
    }
    static void areaCircum(int r)
    {
        float pi =Math.round(Math.PI);
        System.out.println("Area of an Circle is " + pi*(r*r));
        System.out.println("Circumference of an circle is "+ 2*(pi*r));
    }

    static void product(int n1,int n2)
    {
        System.out.println(n1*n2);
    }
    static void sum(int n1,int n2)
    {
        System.out.println(n1+n2);
    }
    static void isEligible(int age)
    {
        if(age>=18)
        {
            System.out.println("Eligible to vote!!");
        }else{
            System.out.println("Not Eligible to vote!!");
        }
    }
    static void evenOdd(int num)
    {
        if(num%2 == 0)
        {
            System.out.println("even");
        }
        else{
            System.out.println("odd");
        }
    }
    static void min(int a,int b, int c)
    {
        int min =a;
        if(b < min) min =b;
        if (c < min) min =c;
        System.out.println("minimum number is "+min);
    }
    static void max(int a,int b,int c)
    {
        int max =a;
        if(b> max) max =b;
        if (c > max) max =c;
        System.out.println("max numbers is "+max);
        
    }

}
