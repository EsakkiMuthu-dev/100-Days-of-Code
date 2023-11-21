public class BinaryToDecimak {
/*
 A number is called as binary-decimal if all the digits in the number should be either ‘1’ or ‘0’. Any
number can be written as a sum of binary-decimals. Our task is to find the minimum number of
binary-decimals to represent a number.
Input : 32
Output : 10 11 11
Input : 120
Output : 10 110

 */

    public static void main(String[] args) {
        int inputNumber = 120; // Change this to the desired number

        System.out.println("Minimum binary-decimals to represent " + inputNumber + ":");
        printBinaryDecimals(inputNumber);
        
    }
    public static void printBinaryDecimals(int number) {
        // Manually convert the decimal number to binary
        StringBuilder binaryRepresentation = new StringBuilder();
        while (number > 0) {
            int remainder = number % 2;
            binaryRepresentation.insert(0, remainder);
            number /= 2;
        }
        System.out.println(binaryRepresentation);
    }
}