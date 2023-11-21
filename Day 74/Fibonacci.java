public class Fibonacci {
    public static void main(String[] args) {
        System.out.println(fib(5));
        fib2(5);
    }
    public static void fib2(int n)
    {
        int a=0;
        int b =1;
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int temp = a;
            a = b;
            b = temp + b;
        }

    }
    public static int fib(int n) {
        if(n<=1)
        {
            return n;
        }
        return fib(n-1)+fib(n-2);
    }
}
