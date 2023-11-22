/*

2) Remove unbalanced parentheses in a given expression.
Eg.) 
Input : ((abc)((de))
Output : ((abc)(de))
Input:   (((ab)
Output : (ab)


4) Check whether a given mathematical expression is valid.
Eg.) 
Input : (a+b)(a*b)
Output : Valid
Input : (ab)(ab+)
Output : Invalid
Input : ((a+b)
Output : Invalid

 */

import javax.swing.text.StyleConstants.CharacterConstants;

public class StringProblem {
    public static void main(String[] args) {
        String str = "(ab)(a+b)(2+3)";
        System.out.println(isValid(str));    
    }

    public static boolean isValid(String str)
    {
        /*
         * 1. check brackets 
         * 2.  + / must comes woth charcter in front and back
         * 
         */
        int brackets=0; 
        for(int i=0;i<str.length();i++)
        {
            // 1) i-> "()""
            if(str.charAt(i)=='(')
            {
                brackets+=1;
            }
            else if(str.charAt(i)==')')
            {
                brackets-=1;
            }

            // 2-> + , - , * % /
            else if((str.charAt(i)=='+') ||(str.charAt(i)=='-') || (str.charAt(i)=='*')||(str.charAt(i)=='/')||(str.charAt(i)=='%') )
            {
                
                if(i+1>str.length() ||  // i+1 checking whether i+1 goes out of index -> true
                (!Character.isLetterOrDigit(str.charAt(i-1)) || //  (
                 !Character.isLetterOrDigit(str.charAt(i+1)))) // )
                {
                    return false;
                }
            }
          
        }
        return brackets==0;
      

    }

}
