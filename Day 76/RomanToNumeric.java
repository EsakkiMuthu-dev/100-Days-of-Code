import java.util.HashMap;

public class RomanToNumeric {
/*
* Given a Roman numeral, the task is to find its corresponding decimal value.

Example : 

Input: IX
Output: 9
Explanation: IX is a Roman symbol which represents 9

Input: XL
Output: 40
Explanation: XL is a Roman symbol which represents 40


     */
    public static void main(String[] args) {
        String roman ="IX";
        romanToNumeric(roman);
        
    }
    public static void romanToNumeric(String roman) {
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        //intiailise result as 0
        int result =0;

        for(int i=0;i<roman.length();i++)
        {
            int currentValue = romanValues.get(roman.charAt(i));
            //IX -> 10 >1 // VI -> 1>5
            if( i+1<roman.length() && romanValues.get(roman.charAt(i+1))>currentValue)
            {
                result = result-currentValue;
            }else{
                result = result+currentValue;
            }

        }
        System.out.println(result);
        
    }

}
