public class ReverseString {
    public static void main(String[] args) {
        String a="hello";
        String pasage ="A man, in the boat says : I see 1-2-3 in the sky";
        //oleeh
        reverse(a);
        reverse2(pasage);
    }
    public static void reverse(String a) {
        StringBuilder  res = new StringBuilder(a);
        int left =0;
        int right =a.length()-1;
        while (left<=right) {
            // move left till you get letter
        
            char temp=a.charAt(right);
            res.setCharAt(right, a.charAt(left));
            res.setCharAt(left, temp);
            left++;
            right--;
        }
        System.out.println(res);
    }
    public static void reverse2(String a) {
        StringBuilder  res = new StringBuilder(a);
        int left =0;
        int right =a.length()-1;
        while (left<=right) {
            while (!Character.isLetter(a.charAt(left))) {
                left++;
            }
            while (!Character.isLetter(a.charAt(right))) {
                right--;
            }
            char temp=a.charAt(right);
            res.setCharAt(right, a.charAt(left));
            res.setCharAt(left, temp);
            left++;
            right--;
        }
        System.out.println(res);
    }
}
