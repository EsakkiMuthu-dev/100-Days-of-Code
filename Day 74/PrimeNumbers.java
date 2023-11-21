public class PrimeNumbers {
    public static void main(String[] args) {
        System.out.println(isPrime(20));
    }
    public static boolean isPrime(int n)
    {
        // if(n<2)
        // {
        //     return false;
        // }
        if(n==2 || n==3)
        {
            return true;
        }
        //not prime
        if(n%2==0 && n%3==0){
            return false;
        }

        int sqrt=(int) Math.sqrt(n)+1;
        for(int i =2;i<=sqrt;i+=6)
        {
            if(n%i==0) return false;
        }
        return true;

    }
}
