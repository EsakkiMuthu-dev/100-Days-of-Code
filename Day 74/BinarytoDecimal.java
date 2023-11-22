/**
 * BinarytoDecimal
 * //Decimal to binary
 * 
 * 1010 -> 10
 * 10101 -> 21
 * 1010 ->  2*0
 * 
 * //Binary to decimal
 * res = 1010
 * 10 -> 1010
 *   2 10
 *   2  5 0
 *   2  4 1 
 *   2  2 0
 *      1  
 */
public class BinarytoDecimal {

    public static void main(String[] args) {
       convertToBinary(10101); 
       convertToDecimal(21);
    }

    public static void convertToDecimal(int binary)
    {
        StringBuilder res = new StringBuilder();
        while (binary>0) {
            int temp = binary%2;
            res.insert(0, temp);
            binary=binary/2;
        }
        System.out.println(res);
    }

    public static void convertToBinary(int decimal)
    {
        int res=0;
        int n=0;

        if(decimal ==0)
        {
           System.out.println(0);
        }

        while (decimal>0) {
            int rem = decimal%10;
            //2*n*last digit
            int mul = (int)(Math.pow(2,n))*rem;
            res=res+mul;
            n++;
            decimal=decimal/10;
        }
        System.out.println(res);

    }
}