public class Check{
    String name;
    int id;
    
    public static void main(String[] args) {
        Check ch = new Check();
        System.out.println(Check.class.getDeclaredFields());
    }
}