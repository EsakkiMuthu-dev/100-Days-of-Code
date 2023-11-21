public class GCD {
    public static void main(String[] args) {
        gcd(10 , 20);
        System.out.println(findLCM(24, 36));
    }

    public static int findLCM(int a, int b) {
        return Math.abs(a * b) / gcd(a, b);
    }
    public static int gcd(int n1,int n2)
    {
        while (n2!=0) {
           int temp = n2;
        n2 = n1 % n2;
        n1 = temp;
        }
        System.out.println(n1);
        return n1;
    }
}
