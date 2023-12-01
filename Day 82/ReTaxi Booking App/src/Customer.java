public class Customer {
    private static int count=1;
    private int id;
    private String name;
    public Customer(String name){
        this.id=count;
        count++;
        this.name=name;
    }
    public int getId(){
        return this.id;
    }
    public String getName(){
        return this.name;
    }
    public void setName(String newName){
        this.name=newName;
    }
}
