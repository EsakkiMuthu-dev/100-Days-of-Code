public class Employee {
    int id;
    String name;
    public Employee(int id,String name){
        this.id=id;
        this.name=name;
    }
    public String toString(){
        return this.id+" "+this.name;
    }
}
