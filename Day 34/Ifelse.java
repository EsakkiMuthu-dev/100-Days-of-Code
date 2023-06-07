class Solution {
    static int dataTypeSize(String str) {
        if(str.equals("Character"))
        {
            return 1;
            
        }else if(str.equals("Integer") || str.equals("Float"))
        {
            return 4;
        }else if(str.equals("Long") || str.equals("Double"))
        {
            return 8;
        }
        
        else{
            return 1;
        }
  

    }
}
