public class SubString {
    /*
4. 
Find if a String2 is substring of String1. If it is, return the index of the first occurrence. else
return -1.
Eg 1:Input:
String 1: test123string
String 2: 123
Output: 4
Eg 2: Input:
String 1: testing12
String 2: 1234
Output: -1
     */
    public static void main(String[] args) {
        String str1 ="test123string";
        String str2 = "123";

        search(str1,str2);
    }
    public static void search(String str1,String str2)
    {
        
        int l1 = str1.length();
        int l2 = str2.length();
        for(int i=0;i<l1;i++)
        {
            if(str1.charAt(i)==str2.charAt(0) && (i+l2)<l1)
            {
                StringBuilder res = new StringBuilder();
            
                for(int j=i;j<i+l2;j++)
                {
                    res.append(str1.charAt(j));  
                }

                System.out.println(res+" "+str2);
                if(res.toString().equals(str2))
                {
                    System.out.println("found");
                }else{
                    System.out.println("Not Found!!");
                }
            }
        }
        // for(int i=0;i<l2;i++)
        // {
        //     for(int j =0;j<l1;j++)
        //     {
        //         int k =i;
        //         if(str2.charAt(k)==str1.charAt(j))
        //         {
                    
        //         }
        //     }
        // }
    }
}
