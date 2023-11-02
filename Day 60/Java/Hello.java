public class Hello {
    public static void main(String[] args) {
        // fun(5);
        System.out.println(factorial(5));
        
    }
    //Fact (5) = n*(n-1)!
    // fact(4) = 4*3*2*1
    //   4* 3!
    /// 3*2!



    public static int factorial(int n)
    {
        // breakpoint
        if(n==1) return 1;   
        return n*factorial(n-1);
    }
    public static void fun(int n)
    {
        // break condition -> head
        if(n>10)
        {
          return;  
        }
        System.out.println(n);
        fun(n+1);
    }
}
