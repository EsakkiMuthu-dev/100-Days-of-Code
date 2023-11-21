public class Factorial {
    public static void main(String[] args) {
        System.out.println(Integer.toString(4,2));
        System.out.println(convertIntToBin(4).replace("0", "3").replace("1", "4"));
        System.out.println(fact(5));
        System.out.println(fact1(5));
    }
    public static String convertIntToBin(int n)
    {
        StringBuilder res = new StringBuilder();
        if(n==0)
        {
            return "0";
        }
        while(n!=0)
        {
            int rem = n%2;
            res.insert(0, rem);
            n=n/2;
        }
        return res.toString();
    }

    public static int fact(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n*fact(n-1);
    }
    public static int fact1(int n) {
        int fact =1;
         if (n == 0 || n == 1) {
            return 1;
        }
        for(int i=2;i<=n;i++)
        {
            fact*=i;
        }
        return fact;
        
    }
}
