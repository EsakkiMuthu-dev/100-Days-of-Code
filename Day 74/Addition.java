/**
 * Addition
1. Adding 2 numbers
GIven 2 huge numbers as seperate digits, store them in array
and process them and calculate the sum of 2 numbers and store
the result in an array and print the sum.
Input:
Number of digits:12
928135673116
Number of digits:9
784621997
Output :
928920295113
 */
public class Addition {
    public static void main(String[] args) {
        String n1 = "928135673116";
        String n2="784621997";
        add(n1,n2);
        mul(n1,n2);
        
    }
     public static void mul(String n1,String n2) {
        int i=n1.length()-1;
        int j = n2.length()-1;
        StringBuilder result = new StringBuilder();
        int mul =1;
        int carry =0;
        while (i>=0 || j>=0) {
            int x = (i>=0)?Character.getNumericValue(n1.charAt(i)):1;
            int y = (j>=0)?Character.getNumericValue(n2.charAt(j)):1;
            mul = (x*y)+carry;
            result.insert(0,mul%10);
            carry=mul/10;
            i--;
            j--;
        }
        if(carry>0) result.insert(0, carry);
        System.out.println(result);
        
    }
    public static void add(String n1,String n2) {
        int i=n1.length()-1;
        int j = n2.length()-1;
        StringBuilder result = new StringBuilder();
        int sum =0;
        int carry =0;
        while (i>=0 || j>=0) {
            int x = (i>=0)?Character.getNumericValue(n1.charAt(i)):0;
            int y = (j>=0)?Character.getNumericValue(n2.charAt(j)):0;
            sum = x+y+carry;
            result.insert(0,sum%10);
            carry=sum/10;
            i--;
            j--;
        }
        if(carry>0) result.insert(0, carry);
        System.out.println(result);
        
    }

    
}