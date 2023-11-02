import java.util.ArrayList;
import java.util.HashMap;

public class GrandChild {
    /*
5. Given a two dimensional array of string like
<”luke”, “shaw”>
<”wayne”, “rooney”>
<”rooney”, “ronaldo”>
<”shaw”, “rooney”>
Where the first string is “child”, second string is “Father”. And given “ronaldo” we have to find his
no of grandchildren Here “ronaldo” has 2 grandchildren. So our output should be 2

father:Listofchildren ,

Ronaldo: [Rooney]
Rooney:[wayne,shaw]
Shaw:[luke]

 */
    public static void main(String[] args) {
        String[][] relations={
                {"luke", "shaw"},
                {"wayne", "rooney"},
                {"rooney", "ronaldo"},
                {"shaw", "rooney"}
            };
        findGrandChild(relations,"ronaldo");
    }
   
    public static void findGrandChild(String[][] relations,String father)
    {
        HashMap<String,ArrayList<String>> fatherMap = new HashMap<>();
        //
        int n = relations.length;
        for(int i=0;i<n;i++)
        {
            fatherMap.putIfAbsent(relations[i][1],new ArrayList<String>() );
            fatherMap.get(relations[i][1]).add(relations[i][0]);
        }
        System.out.println(fatherMap);

        ArrayList<String> ChildList = fatherMap.get(father); 
        System.out.println(ChildList);


        int count=0;
        for(int i=0;i<ChildList.size();i++)
        { 
            count+=fatherMap.get(ChildList.get(i)).size();
        }  
        System.out.println(count); 
    }
} 