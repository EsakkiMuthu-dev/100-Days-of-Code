import java.util.Arrays;;
class Testing{
    public static void main(String[] args) {
        char[][] word={
            {'a','p','p','h'},
            {'b','c','p','h'},
        };
        wordFinding(word,"app");
    }
    public static void wordFinding(char[][] word, String target)
    {
        for(int i =0;i<word.length;i++)
        {
            System.out.println(Arrays.toString(word));
            for(int j=0;j<word[i].length;j++)
            {
            System.out.println(Arrays.toString(word));
            }
        }
    }
}