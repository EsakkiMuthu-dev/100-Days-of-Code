/**
 * AllSubstring
 * abc
 * 
a
ab
abc
b
bc
c

 */
public class AllSubstring {

    public static void main(String[] args) {
        String a = "123";
        allSubString(a);
    }
    public static void allSubString(String word)
    {
        for(int i=0;i<word.length();i++)
        {
            for(int j=i+1;j<=word.length();j++)
            {
                System.out.println(word.substring(i, j));
            }
        }
    }
    
}