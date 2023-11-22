public class StringReversal {
    public static void main(String[] args) {
        // Example usage:
        String inputStr1 = "one two three";
        String outputStr1 = reverseString(inputStr1);
        System.out.println("Input: " + inputStr1 + "\nOutput: " + outputStr1);

        String inputStr2 = "I love india";
        String outputStr2 = reverseString(inputStr2);
        System.out.println("\nInput: " + inputStr2 + "\nOutput: " + outputStr2);
    }

    public static String reverseString(String inputStr) {
        // Base case: if the string is empty or has only one character, return the string itself
        if (inputStr.length() <= 1) {
            return inputStr;
        }

        // Recursive case: reverse the substring excluding the first character
        // and concatenate the first character at the end
        return reverseString(inputStr.substring(1)) + " " + inputStr.charAt(0);
    }
}
