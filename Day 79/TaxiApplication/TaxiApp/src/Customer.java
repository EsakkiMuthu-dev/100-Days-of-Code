public class Customer {
    private static int count=1;
    private String name;
    private int id;

    public Customer(String name)
    {   
        this.name=name;
        this.id=count;
        count++;
    }
    public int getId()
    {
        return this.id;
    }
    public String getName()
    {
        return this.name;
    }
    public void setName(String newName)
    {
        this.name=newName;
    }

    public String toString()
    {
        return this.name;
    }

}
