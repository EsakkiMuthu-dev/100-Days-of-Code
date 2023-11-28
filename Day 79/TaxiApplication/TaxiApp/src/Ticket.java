public class Ticket {
    private static int count=1;
    private final int id;
    private final char pickUpPoint;
    private final char dropPoint;
    private  final Customer customer;
    private final Taxi taxi;
    private final int amount;
    private  final int pickUpTime;

    public Ticket(char pickUpPoint,char dropPoint,Customer customer,Taxi taxi,int amount,int pickUpTime)
    {
        this.pickUpPoint=pickUpPoint;
        this.dropPoint=dropPoint;
        this.customer=customer;
        this.taxi=taxi;
        this.amount=amount;
        this.pickUpTime=pickUpTime;
        this.id=count;
        count+=1;
    }
    public int getId()
    {
        return this.id;
    }
    public Customer getCustomer()
    {
        return this.customer;
    }
    public Taxi getTaxi()
    {
        return this.taxi;
    }
    public char getPickUpPoint()
    {
        return this.pickUpPoint;
    }
    public char getDropPoint()
    {
        return this.pickUpPoint;
    }
    public int getPickUpTime()
    {
        return this.pickUpTime;
    }
    public int getAmount()
    {
        return this.amount;
    }


}
