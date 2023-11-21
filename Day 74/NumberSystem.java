public class NumberSystem {
/*
3) Form a number system with only 3 and 4. Find the nth number of the number system.
Eg.) The numbers are: 3, 4, 33, 34, 43, 44, 333, 334, 343, 344, 433, 434, 443, 444, 3333, 3334,
3343, 3344, 3433, 3434, 3443, 3444 ….
0   -0
1   -1
10  -2
11  -3
100
101
110
111
1000
1001

000 010 100 110 
001 011 101 111


*/
    public static void main(String[] args) {

        // task 1
        // convert number to binary
        numberToBinary(4);
        numberSystem(5);
        
    }
    public static String  numberToBinary(int n)
    {
        // System.out.println(Integer.toBinaryString(n));
        StringBuilder res= new StringBuilder(); // 100
        if(n==0)
        {
            return "0";
        }    
        
        while (n>0) { 
            int rem =n%2; 
            res.insert(0,rem);    
            n=n/2;    
        }
        return res.toString();
    }
    public static void numberSystem(int n)
    {
        for(int i=0;i<=n;i++)
        {
            String binary =numberToBinary(i);
            System.out.println(binary.replace("0", "3").replace("1", "4"));
        }
    }
    
}
