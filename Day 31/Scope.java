public class Scope
{
    public static void main(String[] args) {
        
        int a =10;
        String name = "Muthu";

        {
            a=20;
            name = "Esakki";
            System.out.println(a+" "+name);
        }
        System.out.println(a+" "+name);
    }
}