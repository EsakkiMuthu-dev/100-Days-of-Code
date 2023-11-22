import java.util.HashMap;

public class NoOfOccurence {
    public static void main(String[] args) {
        String input= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        occurrence(input);

    }
    public static void occurrence(String input)
    {
        HashMap<Character,Integer> occurrenceMap = new HashMap<>();
        // for(String word : input.split(" "))
        // {
        //     occurrenceMap.putIfAbsent(word, 0);
        //     occurrenceMap.put(word,occurrenceMap.get(word)+1); // o+1 
        // }
        for(char ch:input.toUpperCase().toCharArray())
        {
            if(ch!=' '&&ch!='.')
            {
            occurrenceMap.putIfAbsent(ch, 0);
            occurrenceMap.put(ch,occurrenceMap.get(ch)+1); // o+1 
            }
        }
        System.out.println(occurrenceMap);
    }
}
