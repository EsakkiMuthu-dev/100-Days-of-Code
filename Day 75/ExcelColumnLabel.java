public class ExcelColumnLabel {
    public static String intToExcelColumn(int n) {
        StringBuilder result = new StringBuilder();
        while (n > 0) {
            // Adjusting the value to 0-based index  -> 0 to 25 27 ->  0
            n--; 
            // Get the remainder after dividing by 26  -> 27 -> 1
            int remainder = n % 26;
            // Convert the remainder to a corresponding character  -> 'A'+1-> AB 
            result.insert(0, (char) ('A' + remainder));
            // Update n to the quotient of the division  -> 27/26 -> 1
            n /= 26;
        }
        return result.toString();
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(intToExcelColumn(1));    // Output: A
        System.out.println(intToExcelColumn(26));   // Output: Z
        System.out.println(intToExcelColumn(27));   // Output: AA
        System.out.println(intToExcelColumn(28));   // Output: AB
        System.out.println(intToExcelColumn(1000)); // Output: ALL
    }
}
