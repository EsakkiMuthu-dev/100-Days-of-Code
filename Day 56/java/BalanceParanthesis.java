import java.util.Scanner;
import java.util.Stack;
import java.util.HashSet;
public class BalanceParanthesis {
    public static void main(String[] args) {
        /*
         * 
         2) Remove unbalanced parentheses in a given expression.
            Eg.) 
            Input : ((abc)((de))
            Output : ((abc)(de))

            Input : (((ab)
            Output : (ab)

        {7 } []   ip: ((abc)(de))
        res=""
                              Stack - ( ( (  a b      stack -( 
                              stack -((             (abc)( de)
                              ( a b)
         */
        Scanner sc  = new Scanner(System.in);
        System.out.println("Enter the input: ");
         String brackets=sc.next();
         System.out.println(balanceBrackets(brackets));
    }
    public static String balanceBrackets(String brackets)
    {
        // S1 : Empty stack and set
        // s2 : iterate through string store open bracket index on stack
        // s3 : after completing iteraton store the elements in the stack
        
        Stack<Integer> stack = new Stack<>();  //)(abc)
        HashSet<Integer> set = new HashSet<>(); 
        // iterate through string
        for(int i=0;i<brackets.length();i++)
        {
            if(brackets.charAt(i)=='('){
                stack.push(i);
            }
            else if(brackets.charAt(i)==')')
            {
                if(stack.isEmpty()){
                    set.add(i);
                }
                else{
                    stack.remove(0);
                }
            }
        }
        // store the stack to set
        set.addAll(stack);

        StringBuilder res = new StringBuilder();

        for(int i =0;i<brackets.length();i++)
        {
            if(set.contains(i)){
                
            }else{
                res.append(brackets.charAt(i));
            }
        }
        
        return res.toString();



    }
}
