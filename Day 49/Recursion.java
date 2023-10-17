public class Recursion {
    public static void main(String[] args) {
        printNumbers(0);
    }
    public static void printNumbers(int n)
    {
        //break condition
        if(n > 10) return;
        System.out.println(n);
        printNumbers(n+1);
    }
    
}
