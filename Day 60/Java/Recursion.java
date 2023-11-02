public class Recursion {
    public static void main(String[] args) {
        fun(2);
    }
    static void fun(int n)
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
