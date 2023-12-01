import java.util.HashMap;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        HashMap<Integer,String> map=new HashMap<>();
        HashMap<Integer,Employee>  empmap=new HashMap<>();
        map.put(2161189,"bharathi");
        System.out.println(map.get(2161189));
        System.out.println(map);
        Employee emp1=new Employee(677, "giri");
        Employee emp2=new Employee(2, "Ak");
        empmap.put(1,emp1);
        empmap.put(emp2.id,emp2);
        System.out.println(empmap);
        
    }
}
