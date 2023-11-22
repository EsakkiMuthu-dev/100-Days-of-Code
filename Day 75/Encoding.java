public class Encoding {

    public static void main(String[] args) {
        String ip = "a1b10";
        decode(ip);
    }

    public static void decode(String str) {
        if (str.isEmpty()) {
            return; // Nothing to decode for an empty string
        }

        StringBuilder result = new StringBuilder(); //"a1b10"
        char toPrint = str.charAt(0);//b
        int times = 0; // 0

        for (int i = 1; i < str.length(); i++) {
            char currentChar = str.charAt(i);

            if (Character.isDigit(currentChar)) {
                times = (times * 10)+ Character.getNumericValue(currentChar);
            } else if (Character.isLetter(currentChar)) {
                result.append(String.valueOf(toPrint).repeat(times));
                toPrint = currentChar;
                times = 0;
            }
        }

        result.append(String.valueOf(toPrint).repeat(times));
        System.out.println(result);
    }
}
