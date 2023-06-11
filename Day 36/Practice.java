import java.util.Scanner;

public class Practice {

    public static void findMax(int a, int b, int c)
    {
        // int max =Integer.MIN_VALUE;
        // int min = Integer.MAX_VALUE;
        int max,min;

        if(a>b && a>c)
        {
            max=a;
        }else if(b>a && b>c)
        {
            max =b;
        }else{
            max=c;
        }

        if(a<b && a<c)
        {
            min=a;
        }else if(b<a && b<c)
        {
            min =b;
        }else{
            min=c;
        }

        System.out.println("Max Value is "+max +". Min value is "+min+".");
    }
    public static void findMaxArr(int[] arr)
    {
        int min=Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for(int n: arr)
        {
            if(n > max)
            {
                max=n;
            } 
            if(n < min)
            {
                min= n;
            }
        }
        System.out.println("Max Value is "+max +". Min value is "+min+".");
    }

    public static void add(int n1,int n2)
    {
        System.out.println("Sum of 2 numbers is "+ (n1+n2));
    }
    public static void mul(int n1,int n2)
    {
        System.out.println("Multiplication of 2 numbers is "+ (n1*n2));
    }
    public static boolean isOdd(int num)
    {
        if(num%2==0)
        {
            return false;
        }
        else{
            return true;
        }
    }

    public static void IsEligible(int age)
    {
        if(age>= 18)
        {
            System.out.println("He/She is Eligible");
        }else{
            System.out.println("He/She is not Eligible");
        }
    }

    public static void circleDetails(int r)
    {
        double circumference = 2* Math.PI*r;
        System.out.println("Circumfernce of the circle is "+ Math.round(circumference));

        double area = Math.PI*r*r;
        System.out.println("Area of the circle is "+area);

    }

    public static void grade(double marks)
    {
        if(marks >=91 && marks<=100 )
        {
            System.out.println("AA");
        }else if(marks >=81 && marks <=90)
        {
            System.out.println("AB");
        }else if(marks >=71 && marks <=80)
        {
            System.out.println("BB");
        }else if(marks >=61 && marks <=70)
        {
            System.out.println("BC");
        }else if(marks >=51 && marks <=60)
        {
            System.out.println("CD");
        }else if(marks >=41 && marks <=50)
        {
            System.out.println("DD");
        }else if(marks<=40){
            System.out.println("Fail");
        }
        
    }

    public static int factorial(int num)
    {
        if(num ==1 || num == 0){
            return 1;
        }
        return num*factorial(num-1);
    }

    public static void isPalindrome(int num)
    {
        int temp =num;
        int digit,reversed;
        reversed=0;
        while(temp>0)
        {
               
        digit =temp %10;
        reversed = (reversed*10) + digit;
        temp = (int) temp/10;

        }
     
        if (num == reversed)
        {
            System.out.println("Given number is Palindrome "+reversed);
        }else{
            System.out.println("Given number is not an Palindrome "+reversed);
        }


        
    }
    public static boolean isPrime( int n)
    {
        for(int i =2; i<=Math.sqrt(n);i++)
        {
            if(n%i == 0) return false;
        }
        return true;
    }
    public static void  primeNumbers(int n1,int n2)
    {
        for(int i = n1;i<=n2;i++){
            if(isPrime(i))
            {
                System.out.println(i  +" is prime .");
            }
        }
    }
    public static void sumOfN(int n)
    {
        System.out.println((n*(n+1)/2));
    }
    public static void main(String[] args) {
        findMax(2,34,78);
        int[] nums={2,34,78,45,90,23,45};
        findMaxArr(nums);
        int num =50;
        if(isOdd(num))
        {
            System.out.println(num +" is odd.");

        }else{
            System.out.println(num +" is even.");
        }

        IsEligible(19);
        Scanner input = new Scanner(System.in);
        // System.out.println("Enter numbers: ");
        // int n1 = input.nextInt();
        // int n2 = input.nextInt();
        // add(n1, n2);
        // mul(n1, n2);
        // System.out.println("Enter radius of an circle : ");
        // int r = input.nextInt();
        // circleDetails(r);
        // System.out.println("Enter ur Mark : ");
        // double marks = input.nextDouble();
        // grade(marks);
        System.out.println("Enter \two number : ");
        int n = input.nextInt();
        int n1 = input.nextInt();
        primeNumbers(n,n1);
        sumOfN(20);
       
        // System.out.println("Factorial of "+ n + " is "+(factorial(n)));
        // isPalindrome(n);
        input.close();


    }
}
