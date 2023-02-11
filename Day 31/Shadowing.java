public class Shadowing {
    static int x = 20;
    public static void main(String[] args) {
        System.out.println(x);

        int x;
        // System.out.println(x);
        x=40;
        System.out.println(x);
    }
    static void display()
    {
        System.out.println(x);
    }
}
